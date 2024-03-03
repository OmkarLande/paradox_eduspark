const express = require('express')
const router = express.Router()

const {roomCreate, getRoomsCreatedByAdmin, getRoomsForStudent, getRoomById, getAllEnrolledStudents, allowStudentEnrollment, applyFromEmail, getPendingStudents, } = require('../controllers/RoomController')
const {auth, isAdmin, isStudent } = require('../middlewares/Auth')


router.post('/create',auth, isAdmin, roomCreate)
router.get('/apply', applyFromEmail)

router.get('/:roomId/pending-students', auth, isAdmin, getPendingStudents)

router.post('/student-allow/:studId/:roomId', auth, isAdmin, allowStudentEnrollment)

router.get('/admin/:userId', getRoomsCreatedByAdmin)

router.get('/student/:userId', auth, getRoomsForStudent)

router.get('/:roomId/enrolled-students', auth, isAdmin, getAllEnrolledStudents)

router.get('/getroom/:roomId',auth, isAdmin,getRoomById)

router.get('/success', (req, res) => {
    const userId = req.params.userId 
    console.log(userId)
    res.send('Success! Your application has been submitted.'); 
});

module.exports = router
