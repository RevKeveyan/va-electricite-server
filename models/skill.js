const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({ 

    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        require:true,
    },
    image:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
    },
    updatedAt:{
        type:Date,
    },
    deletedAt:{
        type:Date,
        default:null
    },
  
});

module.exports = mongoose.model('Skill', skillsSchema);
