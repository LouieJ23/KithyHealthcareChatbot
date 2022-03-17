'use strict';
const router = require('express').Router();
require('dotenv/config');
let alert = require('alert');
const Log = require('../models/Logs');
const Event = require('../models/Events');
const Appointment = require('../models/Appointment');




router.get('/', async (req, res) => {
    try {

        const distinctLogs = await Log.distinct("query");
        const countedLogs = [];
        for (let i = 0; i < distinctLogs.length; i++) {
            let log = distinctLogs[i];
            const frequentLogs = await Log.count({ query: log });

            countedLogs.push({
                frequent: frequentLogs,
                distinct: log
            });
        }

        const currentDate = new Date(Date.now());
        const upcomingEvents = await Event.find({ startDate: { $gt: currentDate } }).sort({ datePosted: -1 });
        const previousEvents = await Event.find({ startDate: { $lt: currentDate } }).sort({ datePosted: -1 });

        const appointments = await Appointment.find({});

        const { page = 1, limit = 5 } = req.query;
        const log = await Log.find()
            .sort({ datePosted: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);
        res.render('admin', {
            logQuery: log,
            page_name: 'home',
            next: parseInt(page) + 1,
            prev: parseInt(page) - 1,
            isPaginate: false,
            newUnAnsweredQuery: countedLogs.length,
            numOfUpcomingEvents: upcomingEvents.length,
            numOfAppointments: appointments.length,
            eventPrevious: previousEvents.length
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

    const distinctLogs = await Log.distinct("query");
    const countedLogs = [];
    for (let i = 0; i < distinctLogs.length; i++) {
        let log = distinctLogs[i];
        const frequentLogs = await Log.count({ query: log });

        countedLogs.push({
            frequent: frequentLogs,
            distinct: log
        });
    }

    const currentDate = new Date(Date.now());
    const upcomingEvents = await Event.find({ startDate: { $gt: currentDate } }).sort({ datePosted: -1 });
    const previousEvents = await Event.find({ startDate: { $lt: currentDate } }).sort({ datePosted: -1 });

    const appointments = await Appointment.find({});

    if (userName == uName && userPassword == uPassword) {
        res.render('admin', {
            page_name: 'home',
            isPaginate: false,
            newUnAnsweredQuery: countedLogs.length,
            numOfUpcomingEvents: upcomingEvents.length,
            numOfAppointments: appointments.length,
            eventPrevious: previousEvents.length
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