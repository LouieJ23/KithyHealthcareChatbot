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
const Log = require('../models/QueryLog');
const res = require('express/lib/response');


mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://admin:user1@cluster0.a4dgc.mongodb.net/KithyDB", () => {
    console.log("Connected to DB!");
});


// const distingLogs = async () => {
//     const distinctLogs = await Log.distinct("query", {isAnswered: false});
//     console.log(distinctLogs);
// }

// distingLogs();

// var samp = "Location";
// Event.findOne({}, function (err, event) {
//     console.log(event);
// }).sort({ datePosted: -1 });

// const currentDate = new Date(Date.now());
// console.log (currentDate.toString().slice(0,10));

// const currentDate = new Date(Date.now().toString().slice(0,10));
// // const currentEvents = await Event.find({ startDate: {$eq: currentDate }} ).sort({ datePosted: 1 });
// const currentEvent = currentEvents[0];

// var result = "The current event will start at " + currentEvent.startDate.toString().slice(0,10) + " " + currentEvent.timeStart + " and will be end at " + currentEvent.endDate.toString().slice(0,10) + " " + currentEvent.timeEnds + ".";


// const logs=async()=> {
// const distinctLogs = await LogQuery.deleteMany({"query": value}) ;
// console.log(distinctLogs);
// }
// logs();
// .sort({startDate: 1})
// const events=async()=> {
//     const eventDate = await Event.find({});
//     const startDate = eventDate[0].startDate.toString().slice(0,15);
//     const currentDate = new Date(Date.now()).toString().slice(0, 15);
//     console.log(startDate === currentDate);
//     console.log(currentDate);
//     console.log(startDate);
//     }
//     events();

const events=async()=> {
        // const eventDate = await Event.find({});
        // const startDate = eventDate[0].startDate.toString().slice(0,15);
        var result = "";
        var count = 0;
        const events = await Event.find({});
        const currentDate = new Date(Date.now()).toString().slice(0, 15);

        for (let i = 0; i < events.length; i++) {
            var startDate = events[i].startDate.toString().slice(0, 15);
            if (startDate === currentDate) {
                result += "The current event will take place at " + events[i].eventLocation + ".\n" + "\n";
                count++;
            }
            // console.log(startDate + "" + currentDate);
            // console.log(Boolean(startDate===currentDate));
            console.log(result);
            console.log(Boolean(startDate===currentDate));
            // console.log(currentDate);
        }
        }
        events();

// ===============current event==================
// const events=async()=> {
//     const events = await Event.find({});
//     const currentDate = new Date(Date.now()).toString().slice(0,15);
//     // const latestEvents = [];
//     var result = "";
//     var count = 0;

// for (let i = 0; i < events.length; i++) {
//     const startDate = events[i].startDate.toString().slice(0,15);

// if(startDate === currentDate) {
//     // latestEvents.push(events[i]);
//     result += "The previous event date are " + events[i].startDate + "\n";
//     count++;
//     console.log(Boolean(startDate === currentDate));
//     console.log(startDate + " " + currentDate);
//     console.log(count);


// }

// }
// console.log(result);

// }
// events();

// ====================previous event====================
// const events=async()=> {
//     const events = await Event.find({});
//     const currentDate = new Date(Date.now()).toString().slice(0,15);
//     // const latestEvents = [];
//     var result = "";
//     var count = 0;

// for (let i = 0; i < events.length; i++) {
//     const startDate = events[i].startDate.toString().slice(0,15);

// if(startDate < currentDate) {
//     // latestEvents.push(events[i]);
//     result += "The previous event date are " + events[i].startDate + "\n";
//     count++;
//     console.log(Boolean(startDate < currentDate));
//     console.log(startDate + " " + currentDate);
//     console.log(count);


// }

// }
// console.log(result);

// }
// events();
// const events = async () => {


//     const getFullDate = (date) => {
//         let year = date.getFullYear();
//         let month = date.getMonth() + 1;
//         if (month < 10) month = "0" + month;
//         var day = date.getDate();
//         if (day < 10) day = "0" + day;
//         date = year + "-" + month + "-" + day;

//         return date;
//     }

//     const events = await Event.find({});
//     let currentDate = getFullDate(new Date());
   
//     var result = "";
//     var count = 0;
//     for (let i = 0; i < events.length; i++) {
//         let eventDate = getFullDate(events[i].startDate);
//         if (eventDate > currentDate) {
//             result += "The upcoming event is " + events[i].eventTitle + ". " + events[i].eventDetails + " ." + "This event is going to held at " + events[i].eventLocation + ", and it will begin at " + events[i].startDate.toString().slice(0,15) + " at " + events[i].timeStart + " and will be going to end on " + events[i].endDate.toString().slice(0,15) + " at " + events[i].timeEnds + ". To take part in this event, you must meet the following requirements: " + events[i].eventRequire + ". To take part in this event, you must complete the steps below:  " + events[i].eventProcess + ". The participants for this event are " + events[i].eventParticipant + ".\n" + "\n";
//             count++;
//         }
//     }

// console.log(result);
// }

// events();
