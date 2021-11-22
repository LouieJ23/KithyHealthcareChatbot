'use strict';

const mongoose = require('mongoose');
const Event = require('../models/Events');

function SampleEvent(req, res) {
    Event.findOne({}, function (err, events) {
        res.json({
            "fulfillmentText": events.eventDetails,
            "outputContexts": []
        });
    })
}
exports.processRequests = (req, res) => {
    SampleEvent(req, res);
};