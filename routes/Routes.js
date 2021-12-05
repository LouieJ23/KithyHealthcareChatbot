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
    app.get('/mildIllness', (req,res) => {
        res.sendFile(__dirname + "/illness.html");
    });
    app.get('/appointment', (req,res) => {
        res.sendFile(__dirname + "/appoitment.html");
    });

    app.get('/admin', (req,res) => {
        res.sendFile(__dirname + "/admin.html");
    });

    app.get('/login', (req,res) => {
        res.sendFile(__dirname + "/login.html");
    });

    app.get('/event2', (req,res) => {
        res.sendFile(__dirname + "/event2.html");
    });

    
    app.post('/', controllers.processRequests);
};