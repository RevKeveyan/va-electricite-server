const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({ 

    contactInfo: {
        name: String,
        email: String,
        phone: String,
        
    },
    title:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true,
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

module.exports = mongoose.model('Message', messageSchema);
