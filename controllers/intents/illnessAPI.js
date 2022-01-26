'use strict';

const mongoose = require('mongoose');
const Illness = require('../../models/Illness');

function _Illness(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    console.log
    if (intent_name == 'Illness') {
        Event.find({}, function (err, illness) {
            // var result = "The latest event name is " + event.eventTitle;
            // res.json({
            //     "fulfillmentMessages": [
            //         {
            //             "quickReplies": {
            //                 "title": "What would you like to know about Event?",
            //                 "quickReplies": [
            //                     "Upcoming",
            //                     "Latest",
            //                     "Previous"
            //                 ]
            //             },
            //             "platform": "FACEBOOK"
            //         },
            //         {
            //             "text": {
            //                 "text": [
            //                     ""
            //                     // result
            //                 ]
            //             }
            //         }
            //     ]
            // });

            console.log(illness);
        });

    }
}