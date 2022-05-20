const mongoose = require('mongoose');

const departmentInfo = mongoose.Schema({
    depName: {
        type: String,
        require: true
    },
    depDetail: {
        type: String,
        require: true
    },
    timeStart: {
        type: String,
        require: true
    },
    timeEnd: {
        type: String,
        require: true
    },
    datePosted:{
        type: Date,
        default: Date
    }

})
module.exports = mongoose.model('Departments', departmentInfo);
