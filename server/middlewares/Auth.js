const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
    try {

        //token extraction
        const token = req.cookies.token
            || req.body.token
            || req.header("Authorisation").replace("Bearer", "");
       

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'token is missing',
            });
        }
        //verify token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            // console.log(decode);
            req.user = decode;
        } catch (error) {
            //token issue
            return res.status(401).json({
                success: false,
                message: 'token is not valid',
            });
        }
        next();
       
    }
    catch (error) {
        return res.status(401).json({
            success: false,
            message: 'error while token validation',
        });
    }
};

//isStudent
exports.isStudent = async (req, res, next) => {
    try {
        if (req.user.role !== "Student") {
            return res.status(401).json({
                success: false,
                message: 'This is protected route only for students',
            });
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role is cannot be verified",
        });
    }
};

//isAdmin
exports.isAdmin = async (req, res, next) => {
    try {
        // console.log(req.user)
        if (req.user.role !== "Admin") {
            return res.status(401).json({
                success: false,
                message: 'This is protected route only for Admin',
            });
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role is cannot be verified",
        });
    }
};