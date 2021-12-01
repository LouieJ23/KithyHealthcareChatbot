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
    const input = req.body.queryResult.queryText;
    // console.log(location);

    Event.findOne({ eventLocation: { $regex: /Location/ }}, function (err, events) {
        var result = "The " + events.eventTitle + " will be going to held  in " + events.eventLocation + ". So in order to participate to the event, you are required to bring " + events.eventRequire + ". The process is to " + events.eventProcess + " and the participants are " + events.eventParticipants;
        // console.log(events);
        res.json({
            "fulfillmentText": result,
            "outputContexts": []
        });
    }).sort({ datePosted: 1 });
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
        if (req.body.queryResult.intent.displayName == "Events") {
            SampleEvent(req, res);
        }
    };

