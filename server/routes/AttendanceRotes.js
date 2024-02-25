const express = require('express')
const router = express.Router()

const {answerQuestion, raiseQuestion} = require('../controllers/AttendanceController')
const {auth, isAdmin, isStudent} = require('../middlewares/Auth')

router.post('/:roomId/questions', auth, isAdmin, raiseQuestion )
router.post('/:queId/answer', auth, isStudent, answerQuestion)

module.exports = router