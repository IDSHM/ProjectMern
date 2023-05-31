const mongoose = require('mongoose');


const agentSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
    },
    category:{
        type:String,
        required:true 
    },
    address:{
        type:String,
        required:true
    },
    area:{
        type:Number,
        required:true
    },
    price:{
        type:Number
    },
    description:{
        type:String
    },
    availability:{
        type:Number
    },
    agentusername:{
        type:String 
    }
})

const Model = mongoose.model('Agentprop', agentSchema);

module.exports= Model;