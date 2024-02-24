const express = require('express')
const router = express.Router()

const {roomCreate, authorizeZoom, allowStudentEnrollment, applyFromEmail, getPendingStudents} = require('../controllers/RoomController')
const {auth, isAdmin, isStudent } = require('../middlewares/Auth')


router.post('/create',auth, isAdmin, roomCreate)
router.get('/auth', authorizeZoom)
router.get('/apply', applyFromEmail)

router.post('/pending-students', auth, isAdmin, getPendingStudents)

router.post('/student-allow', auth, isAdmin, allowStudentEnrollment)

router.get('/success', (req, res) => {
    res.send('Success! Your application has been submitted.'); 
});

module.exports = router
