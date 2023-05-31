const mongoose = require('mongoose');


const appoSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number
    },
    message: {
        type: String
    },
    propertyDetails: {
        id: Number,
        image: {
            type: String,
        },
        name: {
            type: String,
        },
        category: {
            type: String,
        },
        address: {
            type: String,
        },
        area: {
            type: Number,
        },
        price: {
            type: Number
        },
        description: {
            type: String
        },
        availability: {
            type: Number
        },
        agentusername: {
            type: String
        }
    }
})

const Model = mongoose.model('Appointment', appoSchema);

module.exports = Model;