
const mongoose = require('mongoose');

const eventsInfo = mongoose.Schema({
    eventTitle: {
        type: String,
        require: false
    },
    eventLocation: {
        type: String,
        require: false
    },
    eventDetails: {
        type: String,
        require: false
    },
    // startDateTime: {
    //     type: Date,
    //     require: false
    // },
    // endDateTime: {
    //     type: Date,
    //     require: false
    // },
    startDate: {
        type: Date,
        require: true
    },
    endDate: {
        type: Date,
        require: true
    },
    timeStart: {
        type: String,
        require: true
    },
    timeEnds: {
        type: String,
        require: true
    },
    eventRequire: {
        type: String,
        require: false
    },
    eventProcess: {
        type: String,
        require: false
    },
    eventParticipant: {
        type: String,
        require: false
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Events', eventsInfo);