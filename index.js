'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
require('dotenv/config');
const server = express();

//import routes
const config = require('./config');
const event = require('./routes/event');
const department = require('./routes/department')
const routes = require('./routes/Routes');
const staffInfo = require('./routes/staff');
const guidelines = require('./routes/guidelines');
const hCenterInfo = require('./routes/hCenterInfo');
const mildIllness = require('./routes/illness');
const appointment = require('./routes/appointment');
const admin = require('./routes/admin');
const login = require('./routes/login');
const event2 = require('./routes/event');



server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

server.use('/event', event);
server.use('/department', department);
server.use('/staffInfo', staffInfo);
server.use('/guidelines', guidelines);
server.use('/hCenterInfo', hCenterInfo);
server.use('/mildIllness', mildIllness);
server.use('/appointment', appointment);
server.use('/admin', admin);
server.use('/login', login);
server.use('/event2', event2);


mongoose.Promise = global.Promise;
mongoose.connect(config.dbURL, () =>{
    console.log("Connected to DB!");
});

routes(server);
const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log("Server is up! " + port);
});