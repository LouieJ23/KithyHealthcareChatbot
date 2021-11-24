'use strict';

const mongoose = require('mongoose');
const Event = require('../models/Events');
const Department = require('../models/Departments');
const StaffInfo = require('../models/Staffs');
const Guidelines = require('../models/Guidelines');
const HcenterInfo = require('../models/HCenterInfo');

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
exports.processRequests = (req, res) => {
    SampleEvent(req, res);
};

exports.processRequests = (req, res) => {
    SampleDepartment(req, res);
};

exports.processRequests = (req, res) => {
    SampleStaffInfo(req, res);
};

exports.processRequests = (req, res) => {
    SampleGuidelines(req, res);
};

exports.processRequests = (req, res) => {
    SampleHcenterInfo(req, res);
};
