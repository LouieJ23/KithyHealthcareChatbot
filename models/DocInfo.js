const mongoose = require('mongoose');

const docInfo = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    specialization: {
        type: String,
        require: true
    },
    contactInfo: {
        cellNumber: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        }
    },
    schedule: {
        Day: {
            type: String,
            require: true
        },
        Time:{
            type: String,
            require: true 
        }
    },
    datePosted: {
        type: Date,
        default: Date.now
    }
})
mongoose.exports = mongoose.model("DocInfo", docInfo);