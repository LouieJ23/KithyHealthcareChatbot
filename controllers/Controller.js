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
    var location = req.body.queryResult.parameters.event;
   
    // console.log(location);
    
    if(location == "location"){
        Event.find({eventLocation}).sort({eventLocation:1}), function (err, events) {
            res.json({
                "fulfillmentText": events.eventLocation,
                "outputContexts": []
            });
            console.log(events);
        };
    };
   
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

