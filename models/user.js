const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 

    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
    },
    phone:{
        type:String,
    },
    address:{
        type:String,
    },
    experience:{
        type:Number,
    },
    realizedProjectsCount:{
        type:Number,
    },
    image:{
        type:String,
    },
    password:{
        type:String,
    },
    createdAt:{
        type:Date,
    },
    updatedAt:{
        type:Date,
    },
    role:{
        type:String,
        default:"admin"
    },
  
});

module.exports = mongoose.model('User', userSchema);
