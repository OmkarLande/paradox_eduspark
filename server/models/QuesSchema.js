const  mongoose = require("mongoose");

const queSchema = new mongoose.Schema({
    ques:{
        type: String,
        required: true
    },
    opt1:{
        type:String,
        required: true,
    },
    opt2:{
        type:String,
        required: true,
    },
    opt3:{
        type:String,
        required: true,
    },
    correctRes:{
        type:String,
        required:true
    },
    markedRes:{
        type: String,
    },
    attemptedStudents:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }],
    adminAssigned:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }
})

module.exports = mongoose.model("ques", queSchema);
