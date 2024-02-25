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
        const roomId = req.params.roomId;
        const room = await Room.findOne({ _id: roomId });

        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        if (!room.meetLinks || room.meetLinks.length === 0) {
            return res.status(200).json({ meetLinks: [] });
        }

        const latestMeetLinkId = room.meetLinks[room.meetLinks.length - 1];
        const latestMeetLink = await Meet.findById(latestMeetLinkId);

        if (!latestMeetLink) {
            return res.status(404).json({ message: 'Latest meet link not found' });
        }

        res.json({ meetLink: { link: latestMeetLink.link } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


