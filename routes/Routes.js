'use strict';

const express = require('express');

module.exports = (app) => {
    const eventDataController = require('../controllers/EventController');
    const apiRoutes = express.Router();

    app.get('/', (req,res) => {
        res.send('We are happy to see you using Chat Bot Webhook');
    });

    app.post('/', eventDataController.processRequests);
    
};