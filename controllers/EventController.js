'use strict';

const mongoose = require('mongoose');
const Event = require('../models/Event');

exports.processRequests = (req,res) => {
    res.json({
        "fulfillmentText": "Sample Fulfillment",
        "outputContexts": []
    });
};