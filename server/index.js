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
	//cors policy to allow all origins
	cors( { origin: true, credentials: true } )
)

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/temp",
	})
)


app.use('/api/user', userRoutes)
app.use('/api/rooms', roomRoutes)
app.use('/api/attendance', attendanceRoutes)
app.use('/api/meet', meetRoutes)
app.get('/', (req, res) => {
    res.send(`
        <p>Hello from the EDUSPARK server! 😎 Here are some useful links:</p>
        <ul>
            <li><a href="https://documenter.getpostman.com/view/26807468/2sA2xb7GJB" target="_blank">API documentation</a></li>
            <li><a href="https://eduspark-paradox.vercel.app/" target="_blank">Deployment link</a></li>
        </ul>
    `);
});
 
 



app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))