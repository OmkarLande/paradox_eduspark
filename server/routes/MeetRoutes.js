const express = require('express')
const router = express.Router();

const {createMeetLink, destroyMeetLink, listMeetLinks} = require('../controllers/MeetController')
const {auth, isAdmin, isStudent} = require('../middlewares/Auth')

router.post('/publish-link',auth, isAdmin, createMeetLink )
router.delete('/delete-link/:id', auth, isAdmin, destroyMeetLink)

router.get('/:roomId/list', listMeetLinks)

module.exports = router