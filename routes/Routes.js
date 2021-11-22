'use strict';

const express = require('express');

module.exports = (app) => {
    const controllers = require('../controllers/Controller');
    const apiRoutes = express.Router();

    app.get('/', (req,res) => {
        res.sendFile(__dirname + "/homepage.html");
    });
    app.get('/department', (req,res) => {
        res.sendFile(__dirname + "/department.html");
    });
    app.get('/docInfo', (req,res) => {
        res.sendFile(__dirname + "/docInfo.html");
    });
    app.get('/guidelines', (req,res) => {
        res.sendFile(__dirname + "/guidelines.html");
    });
    
    app.post('/', controllers.processRequests);
};