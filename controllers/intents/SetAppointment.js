'use strict';

const mongoose = require('mongoose');
const Event = require('../../models/Appointment');

function _SetAppointment(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    console.log
    // if (intent_name == "Set Appointment") {
    //     Event.find({}, function (err, events) {
    //         const event = events[0];
    //         var result = "The latest event name is " + event.eventTitle;
    //         res.json({
    //             "fulfillmentMessages": [
    //                 {
    //                     "quickReplies": {
    //                         "title": "What would you like to know about Event?",
    //                         "quickReplies": [
    //                             "Upcoming",
    //                             "Latest",
    //                             "Previous"
    //                         ]
    //                     },
    //                     "platform": "FACEBOOK"
    //                 },
    //                 {
    //                     "text": {
    //                         "text": [
    //                             result
    //                         ]
    //                     }
    //                 }
    //             ]
    //         });
    //     });

    // }
    if (async(intent_name == "Set Appointment")) {
        const open = require('open')

       await open('https://healthcarechatbotkithy.herokuapp.com');
        // Opens the url in the default browser

        // await open('http://sindresorhus.com', { app: 'firefox' }) // Specify the app to open in
    }
}

module.exports = _SetAppointment;