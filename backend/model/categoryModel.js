const mongoose = require('mongoose');


const catSchema = new mongoose.Schema({
    cname:{
        type:String
    }
})

const Model = mongoose.model('Category', catSchema);

module.exports= Model;