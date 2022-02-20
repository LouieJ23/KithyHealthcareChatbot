
const mongoose = require('mongoose');

const hotlines = mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    number: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: false
    },
    facebookPage: {
        type: String,
        require: false
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Hotlines', hotlines);