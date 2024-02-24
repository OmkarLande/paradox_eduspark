const User = require("../models/UserSchema");
const Rooms = require("../models/RoomSchema");
const cloudinary = require("../config/cloudinary");

exports.roomCreate = async (req, res) => {
  //   try {
  //       console.log("2")
  //     const userId = req.user.id;
  //     const { roomName, roomDescription, ageGroup } = req.body;
  //     const photo = req.files.photo

  //     console.log("1")
  //     if (!roomName || !roomDescription || !ageGroup) {
  //       return res.status(400).json({
  //         success: false,
  //         message: "all fields are mandatory",
  //       });
  //     }
  //     const result = await cloudinary.uploader.upload(photo.tempFilePath, {
  //         public_id: `${Date.now()}`,
  //         resource_type: "auto"
  //     });
  //     console.log("3")
  //     const adminDetails = await User.findById(userId, {
  //       role: "Admin",
  //     });

  //     if (!adminDetails) {
  //       return res.status(404).json({
  //         success: false,
  //         message: "Admin Details not found",
  //       });
  //     }

  //     const newRoom = await Rooms.create({
  //       roomName,
  //       roomDescription,
  //       ageGroup,
  //       admin: adminDetails._id,
  //       imageUrl: result.secure_url,
  //     });

  //     await User.findByIdAndUpdate(
  //       {
  //         _id: adminDetails._id,
  //       },
  //       {
  //         $push: {
  //           rooms: newRoom._id,
  //         },
  //       },
  //       { new: true }
  //     );

  //     res.status(200).json({
  //       success: true,
  //       data: newRoom,
  //       message: "Room created successfully",
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //     res.status(500).json({
  //       success: false,
  //       message: "Room not created",
  //     });
  //   }
  try {
    const { roomName, roomDescription, ageGroup } = req.body;
    const image = req.files.image;
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(image.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
    });
    // Create a new pet with Cloudinary image URL
    const newRoom = await Rooms.create({
      roomName,
      roomDescription,
      ageGroup,
      admin: adminDetails._id,
      imageUrl: result.secure_url,
    });

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
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
