const express = require('express')
const app = express()
const db = require('./config/db')
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const userRoutes = require('./routes/UserRoutes')
const roomRoutes = require('./routes/RoomRoutes')
const attendanceRoutes = require('./routes/AttendanceRotes')
const meetRoutes = require('./routes/MeetRoutes')

require('dotenv').config()
const port = process.env.PORT || 5000

db.connect()

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/temp",
	})
)
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({ credentials: true, origin: ['http://localhost:5173', 'http://127.0.0.1:5173/' ]})
)
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// })
app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/temp",
	})
)


app.use('/user', userRoutes)
app.use('/rooms', roomRoutes)
app.use('/attendance', attendanceRoutes)
app.use('/meet', meetRoutes)
// app.get('/' , (req , res)=>{

//    res.send('hello from simple server :)')

// })



app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))