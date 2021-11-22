'use strict';

const mongoose = require('mongoose');
const Event = require('../models/Events');
const Department = require('../models/Departments');
const DoctorInfo = require('../models/DoctorInfos');
const Guidelines = require('../models/Guidelines');

function SampleEvent(req, res) {
    Event.findOne({}, function (err, events) {
        res.json({
            "fulfillmentText": events.eventDetails,
            "outputContexts": []
        });
    })
}

function SampleDepartment(req, res) {
    Department.findOne({}, function (err, department) {
        res.json({
            "fulfillmentText": department.depName,
            "outputContexts": []
        });
    })
}

function SampleDoctorInfo(req, res) {
    DoctorInfo.findOne({}, function (err, doctorInfo) {
        res.json({
            "fulfillmentText": doctorInfo.name,
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
exports.processRequests = (req, res) => {
    SampleEvent(req, res);
};

exports.processRequests = (req, res) => {
    SampleDepartment(req, res);
};

exports.processRequests = (req, res) => {
    SampleDoctorInfo(req, res);
};

exports.processRequests = (req, res) => {
    SampleGuidelines(req, res);
};


