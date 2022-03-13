'use strict';
const router = require('express').Router();
require('dotenv/config');




router.get('/', async (req, res) => {
    try {

      
        res.render('admin', {
            logQuery: log,
            page_name: 'home',
            next: parseInt(page) + 1,
            prev: parseInt(page) - 1,
            isPaginate: false,
            newUnAnsweredQuery: countedLogs.length,
            numOfUpcomingEvents: upcomingEvents.length,
            numOfAppointments: appointments.length
        });


    }
    catch (err) {
        res.json({
            message: err
        });
    }

});

router.post('/', async (req, res) => {
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




module.exports = router;