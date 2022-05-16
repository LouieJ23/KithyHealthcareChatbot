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
    consultType: {
        type: String,
        require: true
    },
    dateOfConsultation: {
      type: Date, 
      require: true
    },
    timeOfConsultation: {
        type: String, 
        require: true
      },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    sex: {
        type: String,
        require: true
    },
    number: {
        type: Number,
        require: false
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
   
    datePosted: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Appointment', appointment);