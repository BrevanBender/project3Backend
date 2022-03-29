require("dotenv").config()
const { urlencoded } = require('express')
const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")
const morgan = require("morgan")
const app = express()
app.use(morgan('short'))
app.use(cors())
app.use(urlencoded({extended: true}))
app.use(express.json())

const mongoURI = process.env.MONGO_URI
mongoose.connect(mongoURI)
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});
const Post = require("./models/post")
const postController = require('./controllers/postController')
const User = require("./models/user")


app.use('/', postController)
app.listen(3001, ()=>{

})