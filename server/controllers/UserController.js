const User = require("../models/UserSchema")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

MULTIAVATAR_API = process.env.MULTIAVATAR_API;
exports.signup = async(req, res) => {
    try {
        //data fetching
        const {
            name,
            email,
            password,
            age,
            role,
        } = req.body;

        //validation
        if (!name || !email || !password || !age  ) {
            return res.status(403).json({
                success: false,
                message: 'All fields are required'
            })
        }

        //alredy user?
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User is alredy register',
            })
        }

        //hashing
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
            age,
            avatar: `https://api.multiavatar.com/${name}.png?apikey=${MULTIAVATAR_API}`,
        })
        return res.status(200).json({
            success: true,
            message: 'User is registered',
            user,
        });
    }

    catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "User cannot registered, try again",
        })
    }
}

exports.login = async (req, res) => {
    try {
        //data fetch
        const { email, password, role } = req.body;
        //validate?
        if (!User || !password || !role) {
            return res.status(401).json({
                success: false,
                message: 'All fields are required',
            });
        }
        //alredyUser?
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User not exists',
            });
        }
        
        if(user.role !== role){
            return res.status(403).json({
                success: false,
                message: 'Role is not correct'
            })
        }

        //passCheck?
        if (await bcrypt.compare(password, user.password)) {

            //creteToken
            const payload = {
                email: user.email,
                id: user._id,
                role:role,
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "3h",
            });

            user.token = token;
            user.password = undefined;

            //creteCookie
            const options = {
                expires: new Date(Date.now() + (3 * 24 * 60 * 60 * 1000)),
                httpOnly: true,
                secure: false,
                credentials: 'include',
            }
            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: 'Logged in successful'
            });
        }
        else {
            return res.status(500).json({
                success: false,
                message: 'Password not matched',
            });
        }

    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: 'Login Failed!',
        });
    }
};

exports.getAvatarByUserId = async (req, res) => {
    try {
      const { userId } = req.params;
  
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      if (!user.avatar) {
        return res.status(404).json({ success: false, message: 'Avatar not found for this user' });
      }
  
      return res.json({ success: true, avatarUrl: user.avatar });
    } catch (error) {
      console.error('Error fetching avatar:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };