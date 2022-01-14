const mongoose = require('mongoose');

const appointment = mongoose.Schema({
    category: {
        type: String,
        require: true
    },
    docOption: {
        type: String,
        require: true
    },
    dateTime: {
      type: String, 
      require: true
    },
    patientName: {
        type: String,
        require: true
    },
    sex: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    reason: {
        type: String,
        require: true
    },
    consultType: {
        type: String,
        require: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Appointment', appointment);