'use strict';
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Event = require('../models/Events');
const Appointment = require('../models/Appointment');
const Staff = require('../models/Staffs');
const Illness = require('../models/Illness');
const Guidelines = require('../models/Guidelines');


mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://admin:user1@cluster0.a4dgc.mongodb.net/KithyDB", () =>{
    console.log("Connected to DB!");
});

var samp = "Location";
// Event.findOne({}, function(err, events) {
//     //var result = "The "+events.eventTitle+" will be going to held  in "+events.eventLocation+". So in order to participate to the event, you are required to bring "+events.eventRequire+". The process is to "+events.eventProcess+" and the participants are "+events.eventParticipants;
//     console.log(appointment);
// }).sort({datePosted:-1});

// Appointment.find({}, function(err, appointments) {
//     console.log(appointments);
// });

// Staff.find({}, function(err, staffs) {
//     console.log(staffs);
// });

// Illness.find({}, function(err, illness) {
//     console.log(illness);
// });
Guidelines.find({}, function(err, guidelines) {
    console.log(guidelines);
});