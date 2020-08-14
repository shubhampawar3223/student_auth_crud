//const express = require('express')
const mongoose =require('mongoose')

const studentsSchema= new mongoose.Schema({
    FirstName:{
        type: String,
        trim: true,
        required: true
    },
    LastName:{
        type: String,
        trim: true,
        required: true
    },
    Age:{
        type: Number,
        trim: true,
        required: true
    },
    Collage:{
        type: String,
        trim: true,
        required: true
    },
    Batch:{
        type: String,
        trim: true,
        required: true
    }

})

module.exports= mongoose.model('student', studentsSchema);