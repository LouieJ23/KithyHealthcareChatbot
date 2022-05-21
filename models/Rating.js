const mongoose = require('mongoose');

const rating = mongoose.Schema({
    feedback: {
        type: String,
        require: true
    },
    rate: {
        type: String,
        require: true
    },
    // isAnswered: {
    //     type: Boolean,
    //     require: true
    // },
    datePosted: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Feedback', rating);