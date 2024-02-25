const  mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        trim: true,
    },
    email: {
        type:String,
        required: true,
        trim: true,
    },
    password: {
        type:String,
        required: true,
        trim: true,
    },
    age:{
        type:Number,
        required: true
    },
    avatar:{
        type:String,
    },
    role:{
        type: String,
        enum:["Admin", "Student"]
    },
    rooms:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"rooms"
    }]
})

module.exports = mongoose.model("user", userSchema);
