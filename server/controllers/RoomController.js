require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");
const Rooms = require("../models/RoomSchema");
const axios = require("axios");
const mailSender = require("../utils/mailSender");
const { roomInvite } = require("../mails/RoomInvite");

async function roomCreate(req, res) {
  try {
    const userId = req.user.id;
    const { roomName, roomDescription, ageGroup } = req.body;

    if (!roomName || !roomDescription || !ageGroup) {
      return res.status(400).json({
        success: false,
        message: "all fields are mandatory",
      });
    }

    const adminDetails = await User.findById(userId, {
      role: "Admin",
    });

    if (!adminDetails) {
      return res.status(404).json({
        success: false,
        message: "Admin Details not found",
      });
    }

    const newRoom = await Rooms.create({
      roomName,
      roomDescription,
      ageGroup,
      admin: adminDetails._id,
    });

    // Find students whose age matches the ageGroup of the room
    const matchingStudents = await User.find({
      role: "Student",
      age: ageGroup, // Assuming age is stored as a number in your UserSchema
    });

    const emailPromises = matchingStudents.map((student) => {
      const emailContent = roomInvite(
        roomName,
        roomDescription,
        ageGroup,
        student._id,
        newRoom._id
      );
      return mailSender(student.email, "New Room Created", emailContent);
    });

    // Wait for all emails to be sent
    await Promise.all(emailPromises);

    await User.findByIdAndUpdate(
      {
        _id: adminDetails._id,
      },
      {
        $push: {
          rooms: newRoom._id,
        },
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: newRoom,
      message: "Room created successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Room not created",
    });
  }
}

async function applyFromEmail(req, res) {
  try {
    const userId = req.query.userId;
    const roomId = req.query.roomId;

    const student = await User.findById(userId);

    if (!student || student.role !== "Student") {
      return res.status(403).json({
        success: false,
        message: "Only students can apply for rooms.",
      });
    }

    const room = await Rooms.findById(roomId).populate("pendingStudents");

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found.",
      });
    }

    // Check if the student is already enrolled or pending
    if (room.pendingStudents?.some((student) => student._id.equals(userId))) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this room.",
      });
    }

    // Add student to pendingStudents
    room.pendingStudents.push(userId);
    await room.save();

    // Redirect to a success page after applying
    res.redirect("/rooms/success");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Failed to apply for the room.",
    });
  }
}

async function allowStudentEnrollment(req, res) {
  try {
    const roomId = req.params.roomId;
    const studId = req.params.studId;

    // Find the room
    const room = await Rooms.findById(roomId);

    // Check if the room exists
    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found.",
      });
    }

    // Check if the student is in the pendingStudents list
    if (!room.pendingStudents.includes(studId)) {
      return res.status(400).json({
        success: false,
        message: "The specified student is not pending enrollment.",
      });
    }

    // Remove the student from pendingStudents and add to studentEnrolled
    room.pendingStudents = room.pendingStudents.filter(
      (id) => id.toString() !== studId
    );
    room.studentEnrolled = studId;
    await room.save();

    const student = await User.findById(studId);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found.",
      });
    }

    // Add the roomId to the student's rooms array if it's not already there
    if (!student.rooms.includes(roomId)) {
      student.rooms.push(roomId);
      await student.save();
    }

    return res.status(200).json({
      success: true,
      message: "Student enrollment allowed successfully.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
}

async function getPendingStudents(req, res) {
  try {
    const  roomId  = req.params.roomId;

    // Find the room
    const room = await Rooms.findById(roomId).populate("pendingStudents")
    console.log(room);

    // Check if the room exists
    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found.",
      });
    }

    return res.status(200).json({
      success: true,
      pendingStudents: room.pendingStudents,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
}

async function getRoomsCreatedByAdmin(req, res) {
  try {
    const  userId  = req.params.userId;

    // Find the user with the provided email
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }
    console.log(user)

    // Fetch rooms created by the Admin user
    const roomIds = user.rooms;
    const rooms = await Rooms.find({ _id: { $in: roomIds } });

    // const roomIds = user.rooms;
    // console.log(user)
    // const rooms = await Rooms.find({ _id: { $in: roomIds } });
    

    return res.status(200).json({
      success: true,
      rooms,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
}

async function getAllEnrolledStudents(req, res) {
  try {
    const  roomId  = req.params.roomId;

    // Find the room by its ID
    const room = await Rooms.findById(roomId).populate("studentEnrolled");

    // Check if the room exists
    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found.",
      });
    }

    // Extract enrolled students from the room
    const enrolledStudents = room.studentEnrolled;

    return res.status(200).json({
      success: true,
      enrolledStudents,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
}

async function getRoomsForStudent(req, res) {
    try {
      const  userId  = req.params.userId;

      // Find the user with the provided email
      const user = await User.findById(userId);
      console.log(user)
      const roomIds = user.rooms;
      const rooms = await Rooms.find({ _id: { $in: roomIds } });
      
  
      return res.status(200).json({
        success: true,
        rooms,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function getRoomById(req, res){
  try {
    const  roomId  = req.params.roomId;
  
    const roomDetails  = await Rooms.findById(roomId);
     
    res.json({roomDetails})
    
  } catch (error) {
    console.error(error);
        res.status(500).json({ message: 'Internal server error' });
  }
}


module.exports = {
  getAllEnrolledStudents,
  getRoomsForStudent,
  roomCreate,
  applyFromEmail,
  allowStudentEnrollment,
  getPendingStudents,
  getRoomsCreatedByAdmin,
  getRoomById,
};
