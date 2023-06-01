const mongoose = require('mongoose');


const regSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    phone:{
        type:Number
    },
    address:{
        type:String
    },
    agentusername:{
        type:String
    },
    agentimage:{
        type:String,
    },
    agentdescription:{
        type:String
    },
    
})

const Model = mongoose.model('Logs', regSchema);

module.exports= Model;