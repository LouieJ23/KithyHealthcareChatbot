'use strict';

const express = require('express');

module.exports = (app) => {
    const eventDataController = require('../controllers/EventController');
    const apiRoutes = express.Router();

    app.get('/', (req,res) => {
        res.sendFile(__dirname + "/homepage.html");
    });

    app.post('/', eventDataController.processRequests);
    
};