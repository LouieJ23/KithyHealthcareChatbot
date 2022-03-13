'use strict';

const express = require('express');
const bodyParser = require('body-parser');

//import routes
const event = require('./event');
const department = require('./department')
const staffInfo = require('./staff');
const guidelines = require('./guidelines');
const centerInfo = require('./centerInfo');
const mildIllness = require('./illness');
const appointment = require('./appointment');


module.exports = (server) => {
    const apiRoutes = express.Router();

    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());

    server.get('/', (req, res) => {
        res.sendFile(__dirname + "/homepage.html");
    });

    server.use('/event', event);
    server.use('/department', department);
    server.use('/staffInfo', staffInfo);
    server.use('/guidelines', guidelines);
    server.use('/centerInfo', centerInfo);
    server.use('/mildIllness', mildIllness);
    server.use('/appointment', appointment);
    server.use('/login', login);
    server.use('/logQuery', logQuery);
    server.use('/hotline', hotline);

};