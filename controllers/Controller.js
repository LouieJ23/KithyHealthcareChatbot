'use strict';

const mongoose = require('mongoose');
const Event = require('../models/Events');
const Department = require('../models/Departments');
const StaffInfo = require('../models/Staffs');
const Guidelines = require('../models/Guidelines');
const CenterInfo = require('../models/CenterInfo');
const MildIllness = require('../models/Illness')
const Appointment = require('../models/Appointment');
const Admin = require('../routes/admin');


function _Event(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    
    if (intent_name == 'Events') {
        Event.find({}, function (err, events) {
            const event = events[0];
            var result = "The latest event name is " + event.eventTitle;
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "What would you like to know about Event?",
                            "quickReplies": [
                                "Upcoming",
                                "Latest",
                                "Previous"
                            ]
                        },
                        "platform": "FACEBOOK"
                    },
                    {
                        "text": {
                            "text": [
                                result
                            ]
                        }
                    }
                ]
            });
        });
        
    }
    else if (intent_name == 'Events - latest') {
            Event.find({}, function (err, events) {
                const event = events[0];
                var result = "The " + event.eventTitle + " will be going to held  in " + event.eventLocation + ". So in order to participate to the event, you are required to bring " + event.eventRequire + ". The process is to " + event.eventProcess + " and the participants are " + event.eventParticipant;
                
                
                res.json({
                    "fulfillmentMessages": [
                        {
                            "quickReplies": {
                                "title": result,
                                "quickReplies": [
                                    "Event",
                                    "Health Center",
                                    "Illness",
                                    "Set Appointment",
                                    "Visit Site"
                                ]
                            },
                            "platform": "FACEBOOK"
                        },
                        {
                            "text": {
                                "text": [
                                    ""
                                ]
                            }
                        }
                    ]
                });
            }).sort({ datePosted: -1 });
        }
        else if (intent_name == 'Events - previous') {
                Event.find({}, function (err, events) {
                    const event = events[1];
                    var result = "The recent event is " + event.eventTitle + " was held at " + event.eventLocation + ". The participants were required to  " + event.eventRequire + ". The process is:  " + event.eventProcess + " and the participants are " + event.eventParticipant;
                    res.json({
                        "fulfillmentMessages": [
                            {
                                "quickReplies": {
                                    "title": "What would you like to know about Event?",
                                    "quickReplies": [
                                        "Upcoming",
                                        "Latest",
                                        "Previous"
                                    ]
                                },
                                "platform": "FACEBOOK"
                            },
                            {
                                "text": {
                                    "text": [
                                        result
                                    ]
                                }
                            }
                        ]
                    });
                }).sort({ datePosted: -1 });
            }
    else {
        res.json({
            "fulfillmentText": req.body.queryResult.fulfillmentMessages.text.text[0],
            "outputContexts": []
        });
    }

}


exports.processRequests = (req, res) => {

    let intent_name = req.body.queryResult.intent.displayName;
    if (intent_name == 'Events') {
        _Event(req, res);
    }
    

};

