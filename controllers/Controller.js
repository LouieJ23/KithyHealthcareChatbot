'use strict';

const mongoose = require('mongoose');
const Event = require('../models/Events');
const Department = require('../models/Departments');
const StaffInfo = require('../models/Staffs');
const Guidelines = require('../models/Guidelines');
const HcenterInfo = require('../models/HCenterInfo');
const MildIllness = require('../models/Illness')
const Appointment = require('../routes/appointment');
const Admin = require ('../routes/admin');


function SampleEvent(req, res) {
    let event = req.body.queryResult.parameters.event;
    const input = req.body.queryResult.queryText;
    // console.log(location);
    
    if(event == "details"){
        Event.find({eventDetails:event}, function(err, events) {
            res.json({
                "fulfillmentText": events.eventDetails,
                "outputContexts": []
            });
            console.log(events);
        });
      
    }
    else if (input != location) {
        const fulfillment = req.body.queryResult.fulfillmentMessages[0].text.text[0];
        const obj = { fulfillment };
        console.log("json string is" + JSON.stringify(obj));
            // return res.json({
            //     speech: 'Something went wrong!',
            //     displayText: 'Something went wrong!',
            //     source: 'game schedule'
            // });
    }
   
}

function SampleDepartment(req, res) {
    Department.findOne({}, function (err, department) {
        res.json({
            "fulfillmentText": department.depName,
            "outputContexts": []
        });
    })
}

function SampleStaffInfo(req, res) {
    StaffInfo.findOne({}, function (err, staffInfo) {
        res.json({
            "fulfillmentText": staffInfo.name,
            "outputContexts": []
        });
    })
}

function SampleGuidelines(req, res) {
    Guidelines.findOne({}, function (err, guidelines) {
        res.json({
            "fulfillmentText": guidelines.title,
            "outputContexts": []
        });
    })
}

function SampleHcenterInfo(req, res) {
    HcenterInfo.findOne({}, function (err, centerInfo) {
        res.json({
            "fulfillmentText": centerInfo.builtDate,
            "outputContexts": []
        });
    })
}


function SampleMildIllness(req, res) {
    MildIllness.findOne({}, function (err, illness) {
        res.json({
            "fulfillmentText": illness.title,
            "outputContexts": []
        });
    })
}

function SampleAppointment(req, res) {
    Appointment.findOne({}, function (err, appointment) {
        res.json({
            "fulfillmentText": appointment.category,
            "outputContexts": []
        });
    })
}

exports.processRequests = (req, res) => {
    if(req.body.queryResult.intent.displayName == "Events") {
     SampleEvent(req, res);
    }
};

