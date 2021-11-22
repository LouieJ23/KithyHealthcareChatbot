const mongoose = require('mongoose');

const doctorInfo = mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    specialization:{
        type:String,
        require: true
    },
    contactInfo:{
        cellNumber:{
            type:String,
            require:false
        },
        email:{
            type: String,
            require: false
        }
    },
    schedule:{
        Day:{
            type: String,
            require: true
        },
        Time:{
            type:String,
            require:true
        }
    },
    datePosted:{
        type:Date,
        default: Date
    }

})
module.exports = mongoose.model("DoctorInfo", doctorInfo);