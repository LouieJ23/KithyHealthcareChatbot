'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
require('dotenv/config');
const server = express();
const ejs = require('ejs');
const methodOverride = require('method-override');

//import routes
const config = require('./config');
const event = require('./routes/event');
const department = require('./routes/department')
const staffInfo = require('./routes/staff');
const guidelines = require('./routes/guidelines');
const centerInfo = require('./routes/centerInfo');
const mildIllness = require('./routes/illness');
const appointment = require('./routes/appointment');
const admin = require('./routes/admin');
const login = require('./routes/login');



server.set('view engine', 'ejs');
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());
server.use('/event', event);
server.get('/', (req,res) => {
    res.sendFile(__dirname+ "/routes/homepage.html");
});
server.use('/department', department);
server.use('/staffInfo', staffInfo);
server.use('/guidelines', guidelines);
server.use('/centerInfo', centerInfo);
server.use('/mildIllness', mildIllness);
server.use('/appointment', appointment);
server.use('/admin', admin);
server.use('/login', login);
server.use(express.static(__dirname + '/public'));



mongoose.Promise = global.Promise;
mongoose.connect(config.dbURL, () =>{
    console.log("Connected to DB!");
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log("Server is up! " + port);
});