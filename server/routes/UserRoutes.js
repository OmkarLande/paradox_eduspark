const express = require('express')
const router = express.Router()


const { login, signup, getAvatarByUserId } = require('../controllers/UserController')

router.post('/login',login)

router.post('/signup', signup)

router.get('/:userId', getAvatarByUserId);

module.exports = router
