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
    depSched: {
        type: String,
        require: true
    }

})
module.exports = mongoose.model('Departments', departmentInfo);
