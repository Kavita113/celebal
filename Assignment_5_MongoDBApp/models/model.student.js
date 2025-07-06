const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true,
        enum :['BCA','BBA','BA','B.Tech']
    },
    age:{
        type:Number,
        required:true,
        min:0

    }
})

module.exports = mongoose.model('student',studentSchema);