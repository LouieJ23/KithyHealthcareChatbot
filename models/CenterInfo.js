const mongoose = require('mongoose');

const centerInfo = mongoose.Schema({
    dateOfFounding: {
        type: Date,
        require: true
    },
    publishedBy: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: false
    },
    mission: {
        type: String,
        require: true
    },
    vision: {
        type: String,
        require: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('CenterInfo', centerInfo);