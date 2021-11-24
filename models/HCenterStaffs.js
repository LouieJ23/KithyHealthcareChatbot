const mongoose = require('mongoose');

const Staffs = mongoose.Schema({
    name:{
        type: String,
        requie: true
    },
    specialization:{
        type: String,
        require: true
    },
    
    datePosted:{
        type: Date,
        default: Date.now
    }
})