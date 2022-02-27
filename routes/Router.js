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
const logQuery = require('./logQuery');
const hotline = require('./hotline');
const {processRequests, generatePdf} = require('../controllers/Controller');


module.exports = (server) => {
    const apiRoutes = express.Router();

    // Static Files
    server.use(express.static('public'));
    server.use('/css', express.static(__dirname + 'public/css'));
    server.use('/pdfs', express.static(path.join(__dirname, '../pdfs')));
    


    server.use(expressLayouts);
    server.set('view engine', 'ejs');


    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    server.use('/event', event);

    server.get('/', (req, res) => {
        res.sendFile(__dirname + "/homepage.html");
    });

    server.use('/department', department);
    server.use('/staffInfo', staffInfo);
    server.use('/guidelines', guidelines);
    server.use('/centerInfo', centerInfo);
    server.use('/mildIllness', mildIllness);
    server.use('/appointment', appointment);
    server.use('/login', login);
    server.use('/logQuery', logQuery);
    server.use('/hotline', hotline);
    server.get('/download', generatePdf);
    
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
    
    server.post('/', processRequests);
};