'use strict';

const mongoose = require('mongoose');
const Depart = require('../models/Departments');

function SampleDepartment(req, res) {
    Depart.findOne({}, function (err, Departments) {
        res.json({
            "fulfillmentText": Departments.depDetail,
            "outputContexts": []
        });
    })
}
exports.processRequests = (req, res) => {
    SampleDepartment(req, res);
};