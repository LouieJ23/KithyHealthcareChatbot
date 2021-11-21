'use strict';

const mongoose = require('mongoose');
const Event = require('../models/Event');

function SampleEvent(req, res) {
    Event.findOne({}, function(err, events){
        console.log(events);
    })
}
exports.processRequests = (req,res) => {
    // res.json({
    //     "fulfillmentText": "Sample Fulfillment",
    //     "outputContexts": []
    // });
    SampleEvent(req, res);
};