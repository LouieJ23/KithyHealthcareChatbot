const mongoose = require('mongoose');

const logQuery = mongoose.Schema({
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

module.exports = mongoose.model("LogQuery", logQuery);