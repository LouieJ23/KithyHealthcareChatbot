'use strict';

const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
require('dotenv/config');
const server = express();
 

//import routes
const config = require('./config');
const routes = require('./routes/Router');

mongoose.Promise = global.Promise;
mongoose.connect(config.dbURL, () =>{
    console.log("Connected to DB!");
});

routes(server);

const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log("Server is up! " + port);
});
