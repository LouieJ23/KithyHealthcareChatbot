'use strict';

const mongoose = require('mongoose');
const Event = require('../models/Event');

function SampleEvent(req, res) {
    Event.findOne({}, function (err, events) {
        res.json({
            "fulfillmentText": events.datePosted,
            "outputContexts": []
        });
    })
}
exports.processRequests = (req, res) => {
    SampleEvent(req, res);
};