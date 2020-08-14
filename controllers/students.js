const express= require('express');
const studentsModel = require('../models/students')

module.exports = {
    create: function(req,res,next){
        studentsModel.create({FirstName: req.body.FirstName, LastName: req.body.LastName, Age: req.body.Age, Collage: req.body.Collage, Batch: req.body.Batch}, function(err,result) {
            if(err){
                next(err)
            }else{
                res.json({status: "successful", message: "Student data is added successful", data: null})
            }
        })
    },
    getAll:function(req,res,next){
        let studentList= []
        studentsModel.find({}, function(err, students) {
            if(err){
                next(err)
            }else{
                for(let student of students){
                    studentList.push({id:student.id, firstName: student.firstName, lastName: student.LastName, age:student.Age, collage: student.Collage, batch: student.Batch})
                }
                    res.json({status:"success", message:"Students Found", data:{students: studentList}})
            }
        })
    },
    getById: function(req, res, next){
        studentsModel.findById(req.params.id , function(err, studentInfo) {
            if(err){
                next(err)
            }else{
                res.json({status: "successfull" , message:"Here is your info..." , data:{student: studentInfo}})
            }
        })
    },
    updateById: function(req,res,next){
        studentsModel.findByIdAndUpdate(req.params.id, {FirstName: req.body.FirstName, LastName: req.body.LastName, Age: req.body.Age, Collage: req.body.Collage, Batch: req.body.Batch},function(err,studenti){
            if(err){
                next(err)
            }else{
                res.json({status: "successfull" , message:"Specified data is updated", data:null})
            }
        })
    },
     deleteById: function(req,res,next){
         studentsModel.findByIdAndRemove(req.params.id, function(err, studentInfo){
             if(err){
                 next(err)
             }else{
                res.json({status: "successfull" , message:"Specified data is deleted" , data: null})
             }
         })
     }

}