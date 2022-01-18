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
// Guidelines.find({}, function(err, guidelines) {
//     console.log(guidelines);
// });
// Departments.find({}, function(err, departments) {
//     console.log(departments);
// });

// Event.findOne({}, function (err, event) {
//     // const event = events[0];
//     // var result = "The " + event.eventTitle + " will be going to held  in " + event.eventLocation + ". So in order to participate to the event, you are required to bring " + event.eventRequire + ". The process is to " + event.eventProcess + " and the participants are " + event.eventParticipants;
//     var result1 = "Latest event was "+event.eventTitle;
//     var result2 = "Upcoming event was "+event.eventTitle;
//     let eventDate = event.datePosted;
//     let dateToday = Date.now();
//     console.log(dateToday > eventDate ? result1 : result2);
// }).sort({ datePosted: -1 });
HCenter.findOne({}, function (err, centerInfos) {
console.log(centerInfos);
}).sort({datePosted: -1});
