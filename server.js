const express = require('express');
const app = express();
const port =3000;
const users= require('./Routes/users')
const students = require('./Routes/students');
const bodyParser= require('body-parser');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Students",{useNewUrlParser: true , useUnifiedTopology:true});
mongoose.connection.on('error',console.error.bind(console, "mongodb connection error"))

app.use(bodyParser.json());

app.get('/',  (req,res) => {
    res.json({"tutorial": "Build REST APIs for students"})
})

app.use('/users', users)
app.use('/students',validateUser, students)

function validateUser(req, res, next){
    try{
        const token =req.header('Authorization').replace('Bearer', '')
        console.log(token)
        const data = jwt.verify(token, process.env.JWT_KEY)
        if(!data){
            throw new Error()
        }
        next()
    }catch (error) {
           res.status(401).send({error:"Not authorised to access this resource"})
    }
}

app.listen(port, () => {
    console.log("server is listening")
})