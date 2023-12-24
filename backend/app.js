require ('dotenv').config()
const express  = require('express')
const app = express()
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const connectDB = require('./config/dbConn')
const User  = require('./models/user')
const PORT = process.env.PORT || 80


connectDB()
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));


app.post('/submit',asyncHandler(async(req,res)=>{
    const {email, f_name, l_name, 
        password } = req.body ; 
    console.log(email)
    console.log(f_name)
    console.log(password)
    if( !email || !f_name || !password) {
       return  res.status(400).json({message : "All fields are required"})
    }
    const dup_user = await User.findOne({email}).lean().exec()
    if(dup_user)
    {
        return res.status(400).json({message : "This email is already registered with us"})
    }
    const hashPwd = await bcrypt.hash(password, 10);
    const newUser = {email, f_name, l_name, password :hashPwd}
    const userObject = await User.create(newUser)
    if(userObject)
    {
        return res.status(200).json({message : "New User is created"})
    }
    else {
        return res.status(201).json({message : "There is some problem of creating the user"})
    }
}))

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  
  mongoose.connection.on('error', err => {
    console.log(err)
})