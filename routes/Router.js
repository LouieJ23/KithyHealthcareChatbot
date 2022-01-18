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
                page_name: 'home',
                isPaginate: false
            });
            alert("Login Successful.")
            return true;
        }
        else {
            res.sendFile(__dirname + "/login.html");
            alert("Login Failed.")
            return false;   
        }
    });

    
    server.post('/', controllers.processRequests);
};