const User = require('../models/UserSchema')
const Rooms = require('../models/RoomSchema')

exports.roomCreate = async(req, res) => {
    try {

        const userId = req.user.id;
        const { roomName, roomDescription, ageGroup } = req.body

        if(!roomName || !roomDescription || !ageGroup){
            return res.status(400).json({
                success:false,
                message:"all fields are mandatory",
            });
        }

        const adminDetails = await User.findById(userId, {
            role: "Admin",
        });

        if (!adminDetails){
            return res.status(404).json({
                success:false,
                message:"Admin Details not found",
            });
        }

        const newRoom = await Rooms.create({
            roomName,
            roomDescription,
            ageGroup,
            admin:adminDetails._id,
        })

        await User.findByIdAndUpdate(
            {
                _id:adminDetails._id,
            },
            {
                $push:{
                    rooms:newRoom._id,
                },
            },
            { new: true}
        );
        
        res.status(200).json({
            success:true,
            data:newRoom,
            message:'Room created successfully',
         });

    }
    catch(error){
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "Room not created",
        })
    }
}