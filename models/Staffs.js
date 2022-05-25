const mongoose = require('mongoose');

const staffInfo = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    sex: {
        type: String,
        require: true
    },
    career:{
        type: String,
        require: true
    },
    // specialization: {
    //     type: String,
    //     require: true
    // },
    department:{
        type: String,
        require: true
    },
    
    email: {
        type: String,
        require: true
    },

    datePosted: {
        type: Date,
        default: Date.now
}

})
module.exports = mongoose.model("StaffInfo", staffInfo);