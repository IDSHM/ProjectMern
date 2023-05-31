const mongoose = require('mongoose');


const agentSchema = new mongoose.Schema({
    agentimage:{
        type:String,
    },
    agentname:{
        type:String,
    },
    agentusername:{
        type:String,
    },
    agentemail:{
        type:String,
    },
    agentpassword:{
        type:String,
    },
    agentphone:{
        type:Number
    },
    agentaddress:{
        type:String
    },
})

const Model = mongoose.model('Agents', agentSchema);

module.exports= Model;