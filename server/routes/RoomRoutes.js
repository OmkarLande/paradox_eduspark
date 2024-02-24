const express = require('express')
const router = express.Router()

const {roomCreate} = require('../controllers/RoomController')
const {auth, isAdmin, isStudent } = require('../middlewares/Auth')


router.post('/create',auth, isAdmin, roomCreate)

module.exports = router
