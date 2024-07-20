const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tariffSchema = new mongoose.Schema({ 

    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
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

module.exports = mongoose.model('Tariff', tariffSchema);
