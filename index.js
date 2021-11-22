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

server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

server.use('/event', event);
server.use('/department', department);




mongoose.Promise = global.Promise;
mongoose.connect(config.dbURL, () =>{
    console.log("Connected to DB!");
});

routes(server);
const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log("Server is up! " + port);
});