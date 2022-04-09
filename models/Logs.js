const mongoose = require('mongoose');

const logs = mongoose.Schema({
    query: {
        type: String,
        require: true
    },
    isAnswered: {
        type: Boolean,
        require: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('logs', logs);