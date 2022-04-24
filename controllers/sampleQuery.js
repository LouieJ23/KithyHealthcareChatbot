'use strict';
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Event = require('../models/Events');
const Appointment = require('../models/Appointment');
const Staff = require('../models/Staffs');
const Illness = require('../models/Illness');
const Guidelines = require('../models/Guidelines');
const Departments = require('../models/Departments');
const HCenter = require('../models/CenterInfo');
const LogQuery = require('../models/QueryLog');


mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://admin:user1@cluster0.a4dgc.mongodb.net/KithyDB", () =>{
    console.log("Connected to DB!");
});

// var samp = "Location";
// Event.findOne({}, function (err, event) {
//     console.log(event);
// }).sort({ datePosted: -1 });


const logs=async()=> {
const distinctLogs = await LogQuery.deleteMany({"query": value}) ;
console.log(distinctLogs);
}
logs();