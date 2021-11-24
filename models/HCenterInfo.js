const mongoose = require('mongoose');

const CenterInfo = mongoose.Schema({
    builtDate:{
        type:String,
        require:true
    },
    builtBy:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require: true
    },
    contactInfo:{
        cellNumber:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:false
        }
    },
    mission:{
        type:String,
        require: true
    },
    vision:{
        type:String,
        require:true
    },
    datePosted:{
        type:Date,
        default:Date
    }
})

module.exports = mongoose.model('CenterInfo', CenterInfo);