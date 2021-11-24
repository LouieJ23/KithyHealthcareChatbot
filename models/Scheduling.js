const mongoose = require(mongoose);

const appointment = mongoose.Schema({
    category:{
        type:String,
        require: true
    },
    docOption:{
        type: String,
        require: true
    },
    dateTime:{
        type: DateTime,
        require: true
    },
    patientName:{
        type: String,
        require: true
    },
    sex:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
   reason:{
       require:String,
       require: true
   },
   consultType:{
       type: String,
       require: true
   },
    datePosted:{
        type:Date,
        require: Date.now
    }
})

module.exports = model.mongoose('Appointment', appointment);