'use strict';

const express = require('express');
const ejs = require('ejs');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

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
const logQuery =require('./logQuery');

module.exports = (server) => {
    const controllers = require('../controllers/Controller');
    const apiRoutes = express.Router();

    // Static Files
    server.use(express.static('public'));
    server.use('/css', express.static(__dirname + 'public/css'));

    server.use(expressLayouts);
    server.set('view engine', 'ejs');


    server.use(bodyParser.urlencoded({extended:true}));
    server.use(bodyParser.json());
    server.use('/event', event);

    server.get('/', (req,res) => {
        res.sendFile(__dirname+ "/homepage.html");
    });
    server.use('/department', department);
    server.use('/staffInfo', staffInfo);
    server.use('/guidelines', guidelines);
    server.use('/centerInfo', centerInfo);
    server.use('/mildIllness', mildIllness);
    server.use('/appointment', appointment);
    server.use('/login', login);
    server.use('/admin', admin);
    server.use('/logQuery', logQuery);
     server.post('/', controllers.processRequests);
};