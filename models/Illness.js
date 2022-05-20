const mongoose = require('mongoose');

const mildIllness = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    detail:{
        type: String,
        require: true
    },
    symptoms:{
        type: String,
        require: true
    },
    treatment:{
        type: String,
        require: true
    },
    prevention:{
        type: String,
        require: true
    },
    datePosted:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('IllnessInfo', mildIllness)