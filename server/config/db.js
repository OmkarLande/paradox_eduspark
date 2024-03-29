const mongoose = require('mongoose');
require('dotenv').config();

exports.connect =() =>{
    mongoose.connect(process.env.MONGO_URL)
    .then(() =>console.log("Db Connected"))
    .catch((error)=>{ 
    console.log("Db failed to connect");
    console.error(error);
    process.exit(1);
    })

};