'use strict';

const mongoose = require('mongoose');
const Event = require('../models/Events');
const Department = require('../models/Departments');
const StaffInfo = require('../models/Staffs');
const Guidelines = require('../models/Guidelines');
const HcenterInfo = require('../models/HCenterInfo');
const MildIllness = require('../models/Illness')
const Appointment = require('../routes/appointment');
const Admin = require('../routes/admin');


function SampleEvent(req, res) {
    let event = req.body.queryResult.parameters.event;
    let suggest = req.body.queryResult.queryText;
    const input = req.body.queryResult.queryText;
    // console.log(location);
    if(event == "latest") {
        Event.findOne({}, function(err, events) {
            var result = "The "+events.eventTitle+" will be going to held  in "+events.eventLocation+". So in order to participate to the event, you are required to bring "+events.eventRequire+". The process is to "+events.eventProcess+" and the participants are "+events.eventParticipants;
            res.json({
                "fulfillmentText": result,
                "outputContexts": []
            });
        }).sort({datePosted:-1});
    }
    if(suggest == "Events"){
        Event.findOne({}, function(err, events) {
            var result = "The "+events.eventTitle+" will be going to held  in "+events.eventLocation+". So in order to participate to the event, you are required to bring "+events.eventRequire+". The process is to "+events.eventProcess+" and the participants are "+events.eventParticipants;
            res.json({
                "fulfillmentText": result,
                "outputContexts": []
            });
        }).sort({datePosted:-1});
    }
    else {
        
        Event.findOne({ eventLocation: { $regex: /Location/ }}, function (err, events) {
            var result = "The " + events.eventTitle + " will be going to held  in " + events.eventLocation + ". So in order to participate to the event, you are required to bring " + events.eventRequire + ". The process is to " + events.eventProcess + " and the participants are " + events.eventParticipants;
            // console.log(events);
            res.json({
                "fulfillmentText": result,
                "outputContexts": []
            });
        }).sort({ datePosted: 1 });
    }
}


    exports.processRequests = (req, res) => {
        if (req.body.queryResult.intent.displayName == "Events") {
            SampleEvent(req, res);
        }
    };

