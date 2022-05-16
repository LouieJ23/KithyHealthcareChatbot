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
        const currentDate = new Date(Date.now()).toString().slice(0, 15);
        const latestEvents = [];
        var result = "";

        for (let i = 0; i < events.length; i++) {

            const startDate = events[i].startDate.toString().slice(0, 15);

            if (startDate === currentDate) {
                result += "The current event is " + latestEvents[i].eventTitle + ". " + latestEvents[i].eventDetails + ". This event is going to held at " + latestEvents[i].eventLocation + ", starting on  " + latestEvents[i].startDate.toString().slice(0,15) + " at " + latestEvents[i].timeStart + " and will be going to end on " + latestEvents[i].endDate.toString().slice(0,15) + " at " + latestEvents[i].timeEnds + ". To participate in this event, you'll need to comply this following requirements: " + latestEvents[i].eventRequire + ". And you must follow this following process: " + latestEvents[i].eventProcess + ". The participants for this event are " + latestEvents[i].eventParticipant + ".\n";
            }
        }

        console.log(latestEvents);

        // res.json({
        //     "fulfillmentMessages": [
        //         {
        //             "quickReplies": {
        //                 "title": result,
        //                 "quickReplies": [
        //                     "More",
        //                     "Department",
        //                     "Events",
        //                     "Guidelines",
        //                     "Hotline",
        //                     "Illness",
        //                     "Set Appointment",
        //                     "Staff",
        //                     "Visit Site",
        //                     "[Go Back]",

        //                 ]
        //             },
        //             "platform": "FACEBOOK"
        //         },
        //         {
        //             "text": {
        //                 "text": [
        //                     ""
        //                 ]
        //             }
        //         }
        //     ]
        // });

        if (latestEvents.length > 0) {
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
        // Event.find({}, function (err, events) {
        //     const event = events[0];

        //     var result = "The latest events title is " + event.eventTitle;

        const events = await Event.find({});
        const currentDate = new Date(Date.now()).toString().slice(0, 15);
        const latestEvents = [];

        for (let i = 0; i < events.length; i++) {

            const startDate = events[i].startDate.toString().slice(0, 15);

            if (startDate === currentDate) {
                latestEvents.push(events[i]);
            }
        }

        console.log(latestEvents);
        var result = "The current events title is " + latestEvents[0].eventTitle;
        if (latestEvents.length > 0) {
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
        const latestEvents = [];

        for (let i = 0; i < events.length; i++) {

            const startDate = events[i].startDate.toString().slice(0, 15);

            if (startDate === currentDate) {
                latestEvents.push(events[i]);
            }
        }

        console.log(latestEvents);
        // var result = "The latest events " + latestEvents[0].eventTitle + " will be held in " + latestEvents[0].eventLocation + "starting on " + latestEvents[0].startDate.toString().slice(0,15) + " " + latestEvents[0].timeStart + " " + "and will going to end on " + latestEvents[0].endDate.toString().slice(0,15) + " " + latestEvents[0].timeEnds + ". So in order to participate to the event, you are required to bring " + latestEvents[0].eventRequire + ". The process is to " + latestEvents[0].eventProcess + " and the participants are " + latestEvents[0].eventParticipant + ".";

        // const events = await Event.find({});
        // const currentDate = new Date(Date.now()).toString().slice(0, 15);
        // const latestEvents = [];

        // for (let i = 0; i < events.length; i++) {

        //     const startDate = events[i].startDate.toString().slice(0,15);

        //     if(startDate === currentDate) {
        //         latestEvents.push(events[i]);
        //     }
        // }

        var result = "The current event will start on " + latestEvents[0].startDate.toString().slice(0, 15) + " " + latestEvents[0].timeStart + " and will going to end on " + latestEvents[0].endDate.toString().slice(0, 15) + " " + latestEvents[0].timeEnds + ".";

        if (latestEvents.length > 0) {
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
        const latestEvents = [];

        for (let i = 0; i < events.length; i++) {

            const startDate = events[i].startDate.toString().slice(0, 15);

            if (startDate === currentDate) {
                latestEvents.push(events[i]);
            }
        }

        console.log(latestEvents);
        // var result = "The latest events " + latestEvents[0].eventTitle + " will be held in " + latestEvents[0].eventLocation + "starting on " + latestEvents[0].startDate.toString().slice(0,15) + " " + latestEvents[0].timeStart + " " + "and will going to end on " + latestEvents[0].endDate.toString().slice(0,15) + " " + latestEvents[0].timeEnds + ". So in order to participate to the event, you are required to bring " + latestEvents[0].eventRequire + ". The process is to " + latestEvents[0].eventProcess + " and the participants are " + latestEvents[0].eventParticipant + ".";

        // const events = await Event.find({});
        // const currentDate = new Date(Date.now()).toString().slice(0, 15);
        // const latestEvents = [];

        // for (let i = 0; i < events.length; i++) {

        //     const startDate = events[i].startDate.toString().slice(0,15);

        //     if(startDate === currentDate) {
        //         latestEvents.push(events[i]);
        //     }
        // }

        var result = "The current event will be held at " + latestEvents[0].eventLocation + ".";

        if (latestEvents.length > 0) {
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
        const latestEvents = [];

        for (let i = 0; i < events.length; i++) {

            const startDate = events[i].startDate.toString().slice(0, 15);

            if (startDate === currentDate) {
                latestEvents.push(events[i]);
            }
        }

        console.log(latestEvents);
        // var result = "The latest events " + latestEvents[0].eventTitle + " will be held in " + latestEvents[0].eventLocation + "starting on " + latestEvents[0].startDate.toString().slice(0,15) + " " + latestEvents[0].timeStart + " " + "and will going to end on " + latestEvents[0].endDate.toString().slice(0,15) + " " + latestEvents[0].timeEnds + ". So in order to participate to the event, you are required to bring " + latestEvents[0].eventRequire + ". The process is to " + latestEvents[0].eventProcess + " and the participants are " + latestEvents[0].eventParticipant + ".";

        // const events = await Event.find({});
        // const currentDate = new Date(Date.now()).toString().slice(0, 15);
        // const latestEvents = [];

        // for (let i = 0; i < events.length; i++) {

        //     const startDate = events[i].startDate.toString().slice(0,15);

        //     if(startDate === currentDate) {
        //         latestEvents.push(events[i]);
        //     }
        // }

        var result = "The current event details is " + latestEvents[0].eventDetails + ".";

        if (latestEvents.length > 0) {
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
        const latestEvents = [];

        for (let i = 0; i < events.length; i++) {

            const startDate = events[i].startDate.toString().slice(0, 15);

            if (startDate === currentDate) {
                latestEvents.push(events[i]);
            }
        }

        console.log(latestEvents);
        // var result = "The latest events " + latestEvents[0].eventTitle + " will be held in " + latestEvents[0].eventLocation + "starting on " + latestEvents[0].startDate.toString().slice(0,15) + " " + latestEvents[0].timeStart + " " + "and will going to end on " + latestEvents[0].endDate.toString().slice(0,15) + " " + latestEvents[0].timeEnds + ". So in order to participate to the event, you are required to bring " + latestEvents[0].eventRequire + ". The process is to " + latestEvents[0].eventProcess + " and the participants are " + latestEvents[0].eventParticipant + ".";

        // const events = await Event.find({});
        // const currentDate = new Date(Date.now()).toString().slice(0, 15);
        // const latestEvents = [];

        // for (let i = 0; i < events.length; i++) {

        //     const startDate = events[i].startDate.toString().slice(0,15);

        //     if(startDate === currentDate) {
        //         latestEvents.push(events[i]);
        //     }
        // }

        var result = "In order to participate to the event, you are required to " + latestEvents[0].eventRequire + ".";

        if (latestEvents.length > 0) {
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
        const latestEvents = [];

        for (let i = 0; i < events.length; i++) {

            const startDate = events[i].startDate.toString().slice(0, 15);

            if (startDate === currentDate) {
                latestEvents.push(events[i]);
            }
        }

        console.log(latestEvents);
        // var result = "The latest events " + latestEvents[0].eventTitle + " will be held in " + latestEvents[0].eventLocation + "starting on " + latestEvents[0].startDate.toString().slice(0,15) + " " + latestEvents[0].timeStart + " " + "and will going to end on " + latestEvents[0].endDate.toString().slice(0,15) + " " + latestEvents[0].timeEnds + ". So in order to participate to the event, you are required to bring " + latestEvents[0].eventRequire + ". The process is to " + latestEvents[0].eventProcess + " and the participants are " + latestEvents[0].eventParticipant + ".";

        // const events = await Event.find({});
        // const currentDate = new Date(Date.now()).toString().slice(0, 15);
        // const latestEvents = [];

        // for (let i = 0; i < events.length; i++) {

        //     const startDate = events[i].startDate.toString().slice(0,15);

        //     if(startDate === currentDate) {
        //         latestEvents.push(events[i]);
        //     }
        // }

        var result = "The current event process is " + latestEvents[0].eventProcess + ".";

        if (latestEvents.length > 0) {
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
        const latestEvents = [];

        for (let i = 0; i < events.length; i++) {

            const startDate = events[i].startDate.toString().slice(0, 15);

            if (startDate === currentDate) {
                latestEvents.push(events[i]);
            }
        }

        console.log(latestEvents);
        // var result = "The latest events " + latestEvents[0].eventTitle + " will be held in " + latestEvents[0].eventLocation + "starting on " + latestEvents[0].startDate.toString().slice(0,15) + " " + latestEvents[0].timeStart + " " + "and will going to end on " + latestEvents[0].endDate.toString().slice(0,15) + " " + latestEvents[0].timeEnds + ". So in order to participate to the event, you are required to bring " + latestEvents[0].eventRequire + ". The process is to " + latestEvents[0].eventProcess + " and the participants are " + latestEvents[0].eventParticipant + ".";

        // const events = await Event.find({});
        // const currentDate = new Date(Date.now()).toString().slice(0, 15);
        // const latestEvents = [];

        // for (let i = 0; i < events.length; i++) {

        //     const startDate = events[i].startDate.toString().slice(0,15);

        //     if(startDate === currentDate) {
        //         latestEvents.push(events[i]);
        //     }
        // }

        var result = "The current event participant is " + latestEvents[0].eventParticipant + ".";

        if (latestEvents.length > 0) {
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
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous event was " + event.eventTitle + "  and to held  at " + event.eventLocation + ". So in order to participate to the event, you are required to " + event.eventRequire + ". The process is to " + event.eventProcess + " and the participants are " + event.eventParticipant + ".";

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
        }).sort({ datePosted: -1 });
        // const log11 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });
    }


    else if ((intent_name == 'Events - previous - more - event title') || (intent_name == "Previous Event Title")) {
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous events' title was " + event.eventTitle;


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
        }).sort({ datePosted: -1 });
        // const log12 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });
    }
    else if ((intent_name == "Events - previous - more - date & time") || intent_name == "Previous Event Date & Time") {
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous event was started at " + event.startDateTime + " and ended at " + event.endDateTime;


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
        }).sort({ datePosted: -1 });
    }
    else if ((intent_name == 'Events - previous - more - details') || (intent_name == "Previous Event Details")) {
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous events' details was" + event.eventDetails;


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
        }).sort({ datePosted: -1 });
        // const log13 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });
    }
    else if ((intent_name == 'Events - previous - more - process') || (intent_name == "Previous Event Process")) {
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous events' process was " + event.eventProcess;


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
        }).sort({ datePosted: -1 });
        // const log14 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });
    }
    else if ((intent_name == "Events - previous - more - participants") || (intent_name == "Previous Event Participants")) {
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous events' participants are " + event.eventParticipant;


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
        }).sort({ datePosted: -1 });
        // const log15 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });
    }
    else if ((intent_name == "Events - previous - more - location") || (intent_name == "Previous Event Location")) {
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous events' location was " + event.eventLocation;


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
        }).sort({ datePosted: -1 });

    }
    else if ((intent_name == "Events - previous - more - requirements") || (intent_name == "Previous Event Requirements")) {
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous events' requirements was " + event.eventRequire;


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
        }).sort({ datePosted: -1 });

    }

    // EVENT UPCOMING FUNCTION
    else if ((intent_name == "Events - upcoming") || intent_name == "Upcoming Event") {
        const currentDate = new Date(Date.now());
        const upcomingEvents = await Event.find({ startDate: { $gt: currentDate } }).sort({ startDate: 1 });
        const upcomingEvent = upcomingEvents[0];

        var result = "The upcoming event " + upcomingEvent.eventTitle + ". This event will start at " + upcomingEvent.startDate.toString().slice(0, 15) + " " + upcomingEvent.timeStart + "-" + upcomingEvent.timeEnds + " and will be end at " + upcomingEvent.endDate.toString().slice(0, 15) + " " + upcomingEvent.timeStart + "-" + upcomingEvent.timeEnds + "." + " It will be going to held  in " + upcomingEvent.eventLocation + ". So in order to participate to the event, you are required to bring " + upcomingEvent.eventRequire + ". The process is to " + upcomingEvent.eventProcess + " and the participants are " + upcomingEvent.eventParticipant + ".";
        console.log(upcomingEvent);
        console.log(intent_name);

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