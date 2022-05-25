'use strict';

const express = require('express');
const path = require('path');
const ejs = require('ejs');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
let alert = require('alert');

//import routes
const event = require('./event');
const department = require('./department')
const staffInfo = require('./staff');
const guidelines = require('./guidelines');
const centerInfo = require('./centerInfo');
const mildIllness = require('./illness');
const appointment = require('./appointment');
const admin = require('./admin');
const login = require('./login');
const queryLog = require('./queryLog');
const hotline = require('./hotline');
const upcomingEvent = require('./upcomingEvent');
const previousEvent = require('./previousEvent');
const patientAppointment = require ('./patientAppointment');
const {processRequests, generatePdf} = require('../controllers/Controller');



module.exports = (server) => {
    const apiRoutes = express.Router();
    server.use(express.static('public'));
    server.use(express.static('public/img'));
    server.use('/css', express.static(__dirname + 'public/css'));
    server.use('/pdfs', express.static(path.join(__dirname, '../pdfs')));
    console.log(path.join(__dirname, '../pdfs'));
    
    server.use(expressLayouts);
    server.set('view engine', 'ejs');

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
    server.use('/queryLog', queryLog);
    server.use('/hotline', hotline);
    server.use('/upcomingEvent', upcomingEvent);
    server.use('/patientAppointment', patientAppointment );
    server.use('/previousEvent', previousEvent);

    server.use('/admin', admin);
    server.post('/', processRequests);
};