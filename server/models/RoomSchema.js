const  mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    roomName:{
        type:String,
        required:true,
    },
    roomDescription:{
        type:String,
        required:true,
    },
    ageGroup:{
        type: Number,
        required: true,
    },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    studentEnrolled:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }],
    meetLinks:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"meet"
    }],

    pendingStudents: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    }],

    imageUrl:{
        type:String,
    },
    ques:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ques"
    }]

})

module.exports = mongoose.model("rooms", roomSchema);
