
const mongoose = require('mongoose');

const guidelines = mongoose.Schema({
    actNo:{
        type:String,
        require:false
    },
    title: {
        type: String,
        require: true
    },
    detail: {
        type: String,
        require: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Guidelines', guidelines);