const Que = require('../models/QuesSchema');
const Attendance = require('../models/AttendenceSchema');
const Room = require('../models/RoomSchema')

async function raiseQuestion(req, res) {
    try {
        const { ques, opt1, opt2, opt3, correctRes } = req.body;
        // const adminId = req.user.id;
        const roomId = req.params.roomId; 

        // Create a new question
        const newQuestion = new Que({
            ques,
            opt1,
            opt2,
            opt3,
            correctRes,
        });

        // Save the question
        await newQuestion.save();
        
        const updatedRoom = await Room.findByIdAndUpdate(roomId, { $push: { ques: newQuestion._id } }, { new: true });
        if (!updatedRoom) {
            return res.status(404).json({
                success: false,
                message: 'Room not found or updated',
            });
        }
        console.log(updatedRoom)

        return res.status(200).json({
            success: true,
            message: "Question raised successfully.",
            newQuestion,
            updatedRoom
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error."
        });
    }
}

async function answerQuestion(req, res) {
    try {
        const { selectedOption } = req.body;
        const queId = req.params.queId; 

        const userId = req.user.id;

        // Find the question
        const que = await Que.findById(queId);

        // Check if the question exists
        if (!que) {
            return res.status(404).json({
                success: false,
                message: "Question not found."
            });
        }

        // Check if the user has already attempted the question
        if (que.attemptedStudents.includes(userId)) {
            return res.status(203).json({
                success: false,
                message: "You have already attempted this question."
            });
        }

        // Mark the question as attempted by the user
        que.attemptedStudents.push(userId);

        // Check if the selected option is correct
        if (selectedOption === que.correctRes) {
            // Mark attendance for the student
            await markAttendance(userId, que.roomsId);
        }

        // Save the updated question
        await que.save();

        return res.status(200).json({
            success: true,
            message: "Answer submitted successfully. your attendance are marked",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error."
        });
    }
}

async function markAttendance(userId, roomId) {
    try {
        // Find the attendance record for the user and room
        let attendance = await Attendance.findOne({ studentsAttended: userId, roomsId: roomId });

        // If attendance record doesn't exist, create a new one
        if (!attendance) {
            attendance = new Attendance({
                studentsAttended: userId,
                roomsId: roomId,
                attendanceCount: 1
            });
        } else {
            // Increment attendance count
            attendance.attendanceCount++;
        }

        // Save the attendance record
        await attendance.save();
    } catch (error) {
        console.error(error);
        throw new Error("Failed to mark attendance.");
    }
}

async function getQuestions(req, res) {
    try {
        const roomId = req.params.roomId;

        const room = await Room.findById(roomId);
        if (!room) {
            return res.status(404).json({
                success: false,
                message: "Room not found."
            });
        }

        const firstQuestion = room.ques[0];

        const que = await Que.findById(firstQuestion)
        console.log(que)

        return res.status(200).json({
            success: true,
            question: que
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error."
        });
    }
}


module.exports = {
    raiseQuestion, answerQuestion, getQuestions
};

