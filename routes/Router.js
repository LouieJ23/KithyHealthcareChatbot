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

<<<<<<< HEAD
    // Static Files
    server.use(express.static('public'));
    server.use(express.static('public/img'));
    server.use('/css', express.static(__dirname + 'public/css'));
    server.use('/pdfs', express.static(path.join(__dirname, '../pdfs')));
    


    server.use(expressLayouts);
    server.set('view engine', 'ejs');


=======
>>>>>>> 45015c3b65a5dde51afaa51f526f4e9c9428cc62
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

<<<<<<< HEAD
    server.use('/admin', admin);
    
    // server.get('/admin', (req, res) => {
    //     res.render('admin', {
    //         page_name: 'home',
    //         isPaginate: false
    //     });
    // });


    // server.post('/admin', async (req, res) => {
    //     let userName = req.body.username;
    //     let uName = process.env.USERNAME1;
    //     let uPassword = process.env.PASSWORD1;
    //     let userPassword = req.body.password;

    //     if (userName == uName && userPassword == uPassword) {
    //         res.render('admin', {
    //             page_name: 'home',
    //             isPaginate: false
    //         });
    //         alert("Login Successful.")
    //         return true;
    //     }
    //     else {
    //         res.sendFile(__dirname + "/login.html");
    //         alert("Login Failed.")
    //         return false;
    //     }
    // });
    
    server.post('/', processRequests);
=======
>>>>>>> 45015c3b65a5dde51afaa51f526f4e9c9428cc62
};