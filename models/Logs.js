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
        Default: Date.now
    }
})

module.exports = mongoose.model("Log Query", logQuery);