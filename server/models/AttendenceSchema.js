const  mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
    studentsAttended:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    roomsId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"rooms",
    },
    attendanceCount:{
        type:Number,
    }
})

module.exports = mongoose.model("attendance", attendanceSchema);
