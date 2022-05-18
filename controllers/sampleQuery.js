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
    const events = await Event.find({});
    const currentDate = new Date(Date.now()).toString().slice(0, 15);
    // const latestEvents = [];
    var result = "";
    var count = 0;
for (let i = 0; i < events.length; i++) {
  
    var startDate = events[i].startDate.toString().slice(0,15);
    
    if(startDate < currentDate) {
        // latestEvents.push(events[i]);
        result += "The previous event is " + events[i].eventTitle + ". " + events[i].eventDetails + ". This event took place in " + events[i].eventLocation + ", started on " + events[i].startDate.toString().slice(0,15) + " at " + events[i].timeStart + " until " + events[i].endDate.toString().slice(0,15) + " at " + events[i].timeEnds + ". To take part in this event, you were required to meet the following requirements: " + events[i].eventRequire + ". To take part in this event, you must complete the steps below:  " + events[i].eventProcess + ". The participants for this event were " + events[i].eventParticipant + ".\n" + "\n";
        count++;
    }
}
console.log(result);

}
events();