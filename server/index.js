const express = require('express')
const app = express()
const db = require('./config/db')
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const userRoutes = require('./routes/UserRoutes')

require('dotenv').config()
const port = process.env.PORT || 5000

db.connect()

app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:"*",
		credentials:true,
	})
)
app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/temp",
	})
)

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

app.use('/user', userRoutes)

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))