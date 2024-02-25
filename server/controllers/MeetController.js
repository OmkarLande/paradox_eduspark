const Meet = require('../models/MeetSchema')
const Room = require('../models/RoomSchema')

exports.createMeetLink = async (req, res) => {
    try {
        // Extract meeting link data from request body
        const { roomId, link } = req.body;

        // Check if the user is an admin

        // Create a new meeting link
        const meet = new Meet({ virtualRoom: roomId, link });
        await meet.save();

        // Update room with the new meet link
        const room = await Room.findByIdAndUpdate(roomId, { $set: { meetLinks: meet._id } });

        res.status(200).json({ message: 'Meeting link created successfully', room, meet });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.destroyMeetLink = async (req, res) => {
    try {
        const meetId = req.params.id;

        // Check if the user is an admin

        // Delete the meeting link
        await Meet.findByIdAndDelete(meetId);

        res.json({ message: 'Meeting link deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.listMeetLinks = async (req, res) => {
    try {
        // Get the user ID of the logged-in student from the request object
        const studentId = req.user.id; // Assuming you have implemented authentication middleware

        // Fetch rooms where the student is enrolled
        const rooms = await Room.find({ studentEnrolled: studentId });

        // Extract meetLinks from the rooms
        const meetLinks = [];
        for (const room of rooms) {
            if (room.meetLinks) {
                // Find the meeting link associated with the room
                const meetLink = await Meet.findById(room.meetLinks);
                if (meetLink) {
                    meetLinks.push({
                        roomName: room.roomName,
                        link: meetLink.link
                    });
                }
            }
        }

        res.json({ meetLinks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};