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
    app.get('/staffInfo', (req,res) => {
        res.sendFile(__dirname + "/staff.html");
    });
    app.get('/guidelines', (req,res) => {
        res.sendFile(__dirname + "/guidelines.html");
    });
    app.get('/hCenterInfo', (req,res) => {
        res.sendFile(__dirname + "/hCenterInfo.html");
    });
    
    app.post('/', controllers.processRequests);
};