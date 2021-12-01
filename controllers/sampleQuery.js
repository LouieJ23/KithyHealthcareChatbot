'use strict';
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Event = require('../models/Events');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://admin:user1@cluster0.a4dgc.mongodb.net/KithyDB", () =>{
    console.log("Connected to DB!");
});

Event.findOne({eventLocation: {$regex: /Location/}}, function(err, events) {
    var result = "The "+events.eventTitle+" will be going to held  in "+events.eventLocation+". So in order to participate to the event, you are required to bring "+events.eventRequire+". The process is to "+events.eventProcess+" and the participants are "+events.eventParticipants;
    console.log(events);
}).sort({datePosted:1});
