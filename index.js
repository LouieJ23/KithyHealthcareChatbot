'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
require('dotenv/config');
const server = express();
const ejs = require('ejs');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');

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


// Static Files
server.use(express.static('public'));
server.use('/css', express.static(__dirname + 'public/css'));

server.use(expressLayouts);
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
// server.use('/admin', admin);
server.use('/login', login);
server.get('/admin', (req, res) => {
    res.render('admin', {
        page_name: 'home',
        isPaginate: false
    });
});

server.post('/admin', async (req, res) => {
    let userName = req.body.username;
    let uName = process.env.USERNAME1;
    let uPassword = process.env.PASSWORD1;
    let userPassword = req.body.password;

     if (userName == uName && userPassword == uPassword) {
        res.render('admin', {
            page_name: 'home'
        });
        alert("Login Successful.")
        return true;
    }
     else {
        res.sendFile(__dirname + "/routes/login.html");
        alert("Login Failed.")
        return false;   
    }
});


mongoose.Promise = global.Promise;
mongoose.connect(config.dbURL, () =>{
    console.log("Connected to DB!");
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log("Server is up! " + port);
});