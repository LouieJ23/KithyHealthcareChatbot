'use strict';

const mongoose = require('mongoose');
const { events } = require('../../models/Events');
const Event = require('../../models/Events');
const EventLogQuery = require('../../models/QueryLog');

// EVENT LATEST FUNCTION
async function _Event(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    const value = req.body.queryResult.queryText;
    const recentLog = await EventLogQuery.findOne().sort({ datePosted: -1 });

    console.log("The Intent Name: " + intent_name);
    console.log("The Query Text: " + value);
    console.log("The Recent Log: " + recentLog);

    if (intent_name == "Events") {
        Event.find({}, function (err, events) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "What would you like to know about the Event?",
                            "quickReplies": [
                                "Upcoming",
                                "Latest",
                                "Previous",
                                "[Go Back]",

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
        });
    }
    else if ((intent_name == "Events - latest") || intent_name == "Latest Event") {
        const events = await Event.find({});
        const currentDate = new Date(Date.now()).toString().slice(0,15);
        // const latestEvents = [];
        var result = "";
        var count = 0;

        for (let i = 0; i < events.length; i++) {
            var startDate = events[i].startDate.toString().slice(0, 15);
            if (startDate === currentDate) {
                result += "The current event is " + events[i].eventTitle + ". " + events[i].eventDetails + ". This event is held at " + events[i].eventLocation + ", starting this  " + events[i].startDate.toString().slice(0,15) + " at " + events[i].timeStart + " and will going to end this " + events[i].endDate.toString().slice(0,15) + " at " + events[i].timeEnds + ". To take part in this event, you must meet the following requirements: " + events[i].eventRequire + ", and to follow the steps below:  " + events[i].eventProcess + ". The participants for this event are " + events[i].eventParticipant + ".\n" + "\n";
                count++;
            }
        }

        console.log(result);
        // console.log(count);

        if (count > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }

        else {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "There's no current event.",
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
    }
    else if ((intent_name == "Events - latest - more - event title") || intent_name == "Latest Event title") {
        const events = await Event.find({});
        const currentDate = new Date(Date.now()).toString().slice(0, 15);
        // const latestEvents = [];
        var result = "";
        var count = 0;

        for (let i = 0; i < events.length; i++) {
            var startDate = events[i].startDate.toString().slice(0, 15);
            if (startDate === currentDate) {
                result += "The current event title is " + events[i].eventTitle  + ".\n";
                count++;
            }
        }

        // console.log(result);
        // console.log(count);

        if (count > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }

        else {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "There's no current event.",
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
    }
    else if ((intent_name == "Events - latest - more - Date & Time") || intent_name == "Latest Event date & time") {
        const events = await Event.find({});
        const currentDate = new Date(Date.now()).toString().slice(0, 15);
        var result = "";
        var count = 0;

        for (let i = 0; i < events.length; i++) {
            var startDate = events[i].startDate.toString().slice(0, 15);
            if (startDate === currentDate) {
                result += "The current event is began at " + events[i].timeStart  +  " on " + events[i].startDate.toString().slice(0,15)  +  " and will going to end at " + events[i].timeEnds + " on " + events[i].endDate.toString().slice(0,15) + ".\n" + "\n";
                count++;
            }
        }

        if (count > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }

        else {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "There's no current event.",
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
    }

    else if ((intent_name == "Events - latest - more - @location") || intent_name == "Latest Event location") {
        const events = await Event.find({});
        const currentDate = new Date(Date.now()).toString().slice(0, 15);
        // const latestEvents = [];
        var result = "";
        var count = 0;

        for (let i = 0; i < events.length; i++) {
            var startDate = events[i].startDate.toString().slice(0, 15);
            if (startDate === currentDate) {
                result += "The current event will take place at " + events[i].eventLocation + ".\n" + "\n";
                count++;
            }
        }

        // console.log(result);
        // console.log(count);

        if (count > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }

        else {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "There's no current event.",
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
    }

    else if ((intent_name == "Events - latest - more - @details") || intent_name == "Latest Event details") {
        const events = await Event.find({});
        const currentDate = new Date(Date.now()).toString().slice(0, 15);
        // const latestEvents = [];
        var result = "";
        var count = 0;

        for (let i = 0; i < events.length; i++) {
            var startDate = events[i].startDate.toString().slice(0, 15);
            if (startDate === currentDate) {
                result += events[i].eventDetails + ".\n" + "\n";
                count++;
            }
        }

        // console.log(result);
        // console.log(count);

        if (count > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }

        else {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "There's no current event.",
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
    }

    else if ((intent_name == "Events - latest - more - @requirements") || intent_name == "Latest Event requirements") {
        const events = await Event.find({});
        const currentDate = new Date(Date.now()).toString().slice(0, 15);
        // const latestEvents = [];
        var result = "";
        var count = 0;

        for (let i = 0; i < events.length; i++) {
            var startDate = events[i].startDate.toString().slice(0, 15);
            if (startDate === currentDate) {
                result += "To partcipate in this event you must comply this following requirements: " + events[i].eventRequire  + ".\n" + "\n";
                count++;
            }
        }

        // console.log(result);
        // console.log(count);

        if (count > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }

        else {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "There's no current event.",
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
    }

    else if ((intent_name == "Events - latest - more - @process") || intent_name == "Latest Event process") {
        const events = await Event.find({});
        const currentDate = new Date(Date.now()).toString().slice(0, 15);
        // const latestEvents = [];
        var result = "";
        var count = 0;

        for (let i = 0; i < events.length; i++) {
            var startDate = events[i].startDate.toString().slice(0, 15);
            if (startDate === currentDate) {
                result += "To take part in this event, you must complete the steps below: " + events[i].eventProcess + ".\n" + "\n";
                count++;
            }
        }

        // console.log(result);
        // console.log(count);

        if (count > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }

        else {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "There's no current event.",
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
    }

    else if ((intent_name == "Events - latest - more - @participants") || intent_name == "Latest Event participants") {
        const events = await Event.find({});
        const currentDate = new Date(Date.now()).toString().slice(0, 15);
        // const latestEvents = [];
        var result = "";
        var count = 0;

        for (let i = 0; i < events.length; i++) {
            var startDate = events[i].startDate.toString().slice(0, 15);
            if (startDate === currentDate) {
                result += "The participants of this event are: " + events[i].eventParticipant + ".\n" + "\n";
                count++;
            }
        }

        // console.log(result);
        // console.log(count);

        if (count > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }

        else {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "There's no current event.",
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
    }

    //PREVIOUS EVENT FUNCTION
    else if ((intent_name == "Events - previous") || intent_name == "Previous Event") {
        const currentDate = new Date(Date.now());
        const events = await Event.find({ startDate: { $lt: currentDate } }).sort({ startDate: 1 });
        const previousEvent = events[0];

        result = "The previous event is " + previousEvent.eventTitle + ". " + previousEvent.eventDetails + ". This event took place in " + previousEvent.eventLocation + ", started on " + previousEvent.startDate.toString().slice(0,15) + " at " + previousEvent.timeStart + " until " + previousEvent.endDate.toString().slice(0,15) + " at " + previousEvent.timeEnds + ". To take part in this event, you were required to meet the following requirements: " + previousEvent.eventRequire + ", and you must complete the steps below:  " + previousEvent.eventProcess + ". The participants for this event were " + previousEvent.eventParticipant + ".\n" + "\n";
        
        console.log(result);
       
        if (events.length > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }

        else {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "There's no current event.",
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
    }


    else if ((intent_name == 'Events - previous - more - event title') || (intent_name == "Previous Event Title")) {
        const currentDate = new Date(Date.now());
        const events = await Event.find({ startDate: { $lt: currentDate } }).sort({ startDate: 1 });
        const previousEvent = events[0];

        if (events.length > 0) {
            var result = "The recent event title was: " + previousEvent.eventTitle + "\n";


            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",

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
        }
    }
    else if ((intent_name == "Events - previous - more - date & time") || intent_name == "Previous Event Date & Time") {
        const currentDate = new Date(Date.now());
        const events = await Event.find({ startDate: { $lt: currentDate } }).sort({ startDate: 1 });
        const previousEvent = events[0];

        var result = "The recent event was started at " + previousEvent.timeStart +  " on " + previousEvent.startDateTime.toString().slice(0,15)  + " and ended at " +  previousEvent.endDateTime + " on " + previousEvent.timeEnds;
    
        if (events.length > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",



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
        }
    }
    else if ((intent_name == 'Events - previous - more - details') || (intent_name == "Previous Event Details")) {
        const currentDate = new Date(Date.now());
        const events = await Event.find({ startDate: { $lt: currentDate } }).sort({ startDate: 1 });
        const previousEvent = events[0];

        var result = "Detail: " + previousEvent.eventDetails;
    
        if (events.length > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",

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
        }
    }
    else if ((intent_name == 'Events - previous - more - process') || (intent_name == "Previous Event Process")) {
        const currentDate = new Date(Date.now());
        const events = await Event.find({ startDate: { $lt: currentDate } }).sort({ startDate: 1 });
        const previousEvent = events[0];

        var result = "By taking part of this event, you were required to: " + previousEvent.eventProcess;
    
        if (events.length > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",

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
        }
    }
    else if ((intent_name == "Events - previous - more - participants") || (intent_name == "Previous Event Participants")) {
        const currentDate = new Date(Date.now());
        const events = await Event.find({ startDate: { $lt: currentDate } }).sort({ startDate: 1 });
        const previousEvent = events[0];

        var result = "Participants in this event are: " + previousEvent.eventParticipant;
    
        if(events.length > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",

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
        }
    }
    else if ((intent_name == "Events - previous - more - location") || (intent_name == "Previous Event Location")) {
        const currentDate = new Date(Date.now());
        const events = await Event.find({ startDate: { $lt: currentDate } }).sort({ startDate: 1 });
        const previousEvent = events[0];

        var result = "The recent event was held at: " + previousEvent.eventLocation;
    
        if (events.length > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }

    }
    else if ((intent_name == "Events - previous - more - requirements") || (intent_name == "Previous Event Requirements")) {
        const currentDate = new Date(Date.now());
        const events = await Event.find({ startDate: { $lt: currentDate } }).sort({ startDate: 1 });
        const previousEvent = events[0];

        var result = "To participate in this event you were required to comply the following requirements: " + previousEvent.eventRequire;
    
        if (events.length > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",

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
        }

    }

    // EVENT UPCOMING FUNCTION
    else if ((intent_name == "Events - upcoming") || intent_name == "Upcoming Event") {
       
    const getFullDate = (date) => {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        if (month < 10) month = "0" + month;
        var day = date.getDate();
        if (day < 10) day = "0" + day;
        date = year + "-" + month + "-" + day;

        return date;
    }
    const events = await Event.find({});
    let currentDate = getFullDate(new Date());

    var result = "";
    var count = 0;
    for (let i = 0; i < events.length; i++) {
        let eventDate = getFullDate(events[i].startDate);
        if (eventDate > currentDate) {
            // result += "The current event is " + events[i].eventTitle + ". " + events[i].eventDetails + ". This event is going to held at " + events[i].eventLocation + ", starting on  " + events[i].startDate.toString().slice(0,15) + " at " + events[i].timeStart + " and will be going to end on " + events[i].endDate.toString().slice(0,15) + " at " + events[i].timeEnds + ". To take part in this event, you must meet the following requirements: " + events[i].eventRequire + ". To take part in this event, you must complete the steps below:  " + events[i].eventProcess + ". The participants for this event are " + events[i].eventParticipant + ".\n" + "\n";
            result += "The upcoming event is " + events[i].eventTitle + ". " + events[i].eventDetails + " ." + "This event is going to held at " + events[i].eventLocation + ", this will begin at " + events[i].timeStart + " on " + events[i].startDate.toString().slice(0,15)  + ", and will end at " + events[i].timeEnds + " on " + events[i].endDate.toString().slice(0,15)   + ". To take part in this event, you must meet the following requirements: " + events[i].eventRequire + ", and you must complete the following steps: " + events[i].eventProcess + ". The participants for this event are " + events[i].eventParticipant + ".\n" + "\n";
         
         
            count++;
        }
    }
    console.log(result);

        if (count > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }

        else {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "There's no upcoming event.",
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
    }
    else if ((intent_name == "Events - upcoming - more - event title") || intent_name == "Upcomint Event Title") {
        const currentDate = new Date(Date.now());
        const upcomingEvents = await Event.find({ startDate: { $gt: currentDate } }).sort({ startDate: 1 });
        const upcomingEvent = upcomingEvents[0];

        var result = "The upcoming event title is " + upcomingEvent.eventTitle;

        if (upcomingEvents.length > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }

        else {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "There's no upcoming event.",
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
    }

    else if ((intent_name == "Events - upcoming - more - date & time") || intent_name == "Upcoming Event Date & Time") {
        const currentDate = new Date(Date.now());
        const upcomingEvents = await Event.find({ startDate: { $gt: currentDate } }).sort({ startDate: 1 });
        const upcomingEvent = upcomingEvents[0];

        var result = "The upcoming event will start at " + upcomingEvent.startDate.toString().slice(0, 15) + " " + upcomingEvent.timeStart + " and will be end at " + upcomingEvent.endDate.toString().slice(0, 15) + " " + upcomingEvent.timeEnds + ".";

        if (upcomingEvents.length > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
        else {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "There's no upcoming event.",
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
    }
    else if (intent_name == "Events - upcoming - more - location") {
        const currentDate = new Date(Date.now());
        const upcomingEvents = await Event.find({ startDate: { $gt: currentDate } }).sort({ startDate: 1 });
        const upcomingEvent = upcomingEvents[0];

        var result = "The upcoming event location is at " + upcomingEvent.eventLocation;

        if (upcomingEvents.length > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }

        else {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "There's no upcoming event.",
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
    }

    else if ((intent_name == "Events - upcoming - more - details") || intent_name == "Upcoming Event Details") {
        const currentDate = new Date(Date.now());
        const upcomingEvents = await Event.find({ startDate: { $gt: currentDate } }).sort({ startDate: 1 });
        const upcomingEvent = upcomingEvents[0];

        var result = "The upcoming event detail is " + upcomingEvent.eventDetails;
        if (upcomingEvents.length > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }

        else {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "There's no upcoming event.",
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
    }
    else if ((intent_name == "Events - upcoming - more - process") || intent_name == "Upcoming Event Process") {
        const currentDate = new Date(Date.now());
        const upcomingEvents = await Event.find({ startDate: { $gt: currentDate } }).sort({ startDate: 1 });
        const upcomingEvent = upcomingEvents[0];

        var result = "The upcoming event process is " + upcomingEvent.eventProcess;

        if (upcomingEvents.length > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
        else {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "There's no upcoming event.",
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
    }
    else if ((intent_name == "Events - upcoming - more - participants") || intent_name == "Upcoming Event Participants") {
        const currentDate = new Date(Date.now());
        const upcomingEvents = await Event.find({ startDate: { $gt: currentDate } }).sort({ startDate: 1 });
        const upcomingEvent = upcomingEvents[0];

        var result = "The upcoming event participant is " + upcomingEvent.eventParticipant;

        if (upcomingEvents.length > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
        else {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "There's no upcoming event.",
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }

    }
    else if ((intent_name == "Events - upcoming - more - requirements") || intent_name == "Upcoming Event Requirements") {
        const currentDate = new Date(Date.now());
        const upcomingEvents = await Event.find({ startDate: { $gt: currentDate } }).sort({ startDate: 1 });
        const upcomingEvent = upcomingEvents[0];

        var result = "The upcoming event requirement is " + upcomingEvent.eventRequire;

        if (upcomingEvents.length > 0) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
        else {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "There's no upcoming event.",
                            "quickReplies": [
                                "More",
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "[Go Back]",
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
        }
    }

}

module.exports = _Event;