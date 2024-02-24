const  mongoose = require("mongoose");

const meetSchema = new mongoose.Schema({
    virtualRoom:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"rooms",
    },
    link:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("meet", meetSchema);
