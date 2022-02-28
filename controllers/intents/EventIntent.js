'use strict';

const mongoose = require('mongoose');
const Event = require('../../models/Events');
const EventLogQuery = require('../../models/Logs');

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
            const event = events[0];
            // var result = "The latest event name is " + event.eventTitle;
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
    else if (intent_name == "Events - latest") {
        Event.find({}, function (err, events) {
            const event = events[0];
            var result = "The latest events " + event.eventTitle + " will be going to held  in " + event.eventLocation + ". So in order to participate to the event, you are required to bring " + event.eventRequire + ". The process is to " + event.eventProcess + " and the participants are " + event.eventParticipant + ".";

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
    else if ((intent_name == "Events - latest - more - event title") || intent_name == "Latest Event title") {
        Event.find({}, function (err, events) {
            const event = events[0];

            var result = "The latest events title is " + event.eventTitle;


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
    else if ((intent_name == "Events - latest - more - Date & Time") || intent_name == "Latest Event date & time") {
        Event.find({}, function (err, events) {
            const event = events[0];
            var result = "The latest event is starting in " + event.startDateTime + " and end in " + event.endDateTime;


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

    else if ((intent_name == "Events - latest - more - @location") || intent_name == "Latest Event location") {
        Event.find({}, function (err, events) {
            const event = events[0];
            var result = "The latest events location is " + event.eventLocation;


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

    else if ((intent_name == "Events - latest - more - @details") || intent_name == "Latest Event details") {
        Event.find({}, function (err, events) {
            const event = events[0];
            var result = "The latest events details is " + event.eventDetails;


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

    else if ((intent_name == "Events - latest - more - @requirements") || intent_name == "Latest Event requirements") {
        Event.find({}, function (err, events) {
            const event = events[0];
            var result = "The latest events requirements is " + event.eventRequire;


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

    else if ((intent_name == "Events - latest - more - @process") || intent_name == "Latest Event process") {
        Event.find({}, function (err, events) {
            const event = events[0];
            var result = "The latest events process is " + event.eventProcess;


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

    else if ((intent_name == "Events - latest - more - @participants") || intent_name == "Latest Event participants") {
        Event.find({}, function (err, events) {
            const event = events[0];
            var result = "The latest events participants is " + event.eventParticipant;


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

    //PREVIOUS EVENT FUNCTION
    else if ((intent_name == "Events - previous") || intent_name == "Previous Event") {
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous event was " + event.eventTitle + "  and to held  at " + event.eventLocation + ". So in order to participate to the event, you are required to bring " + event.eventRequire + ". The process is to " + event.eventProcess + " and the participants are " + event.eventParticipant + ".";

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


    else if ((intent_name == 'Events - previous - more - event title') || (intent_name == "Previous Event - event title")) {
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
    else if ((intent_name == "Events - previous - more - date & time") || intent_name == "Latest Event - date & time") {
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
    else if ((intent_name == 'Events - previous - more - details') || (intent_name == "Previous Event - details")) {
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
    else if ((intent_name == 'Events - previous - more - process') || (intent_name == "Previous Event - process")) {
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
    else if ((intent_name == "Events - previous - more - participants") || (intent_name == "Previous Event - participants")) {
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
    else if ((intent_name == "Events - previous - more - location") || (intent_name == "Previous Event - location")) {
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
        // const log16 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });
    }
    else if ((intent_name == "Events - previous - more - requirements") || (intent_name == "Previous Event - requirements")) {
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
        // const log17 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });
    }

    // EVENT UPCOMING FUNCTION
    else if (intent_name == "Events - upcoming") {

        const currentDate = new Date(Date.now());

        const upcomingEvents = await Event.find({ startDate: { $gt: currentDate } }).sort({ datePosted: -1 });
        const upcomingEvent = upcomingEvents[0];
        const upcomingEventDate = new Date(upcomingEvent.startDate);

        const sampleDate = upcomingEventDate.getMonth() + " " + upcomingEventDate.getDay() + ", "+upcomingEventDate.getFullYear();

        var result = "The upcoming event " + upcomingEvent.eventTitle + ". This event will start at " + sampleDate + " " + upcomingEvent.timeStart + "-" + upcomingEvent.timeEnds + " ant will be end at " + upcomingEvent.endDate + " " + upcomingEvent.timeStart + "-" + upcomingEvent.timeEnds + "." + " It will be going to held  in " + upcomingEvent.eventLocation + ". So in order to participate to the event, you are required to bring " + upcomingEvent.eventRequire + ". The process is to " + upcomingEvent.eventProcess + " and the participants are " + upcomingEvent.eventParticipant + ".";
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
    else if (intent_name == "Events - upcoming - more - event title") {
        Event.find({}, function (err, events) {
            const event = events[0];
            let eventDate = Date.parse(event.startDate);
            let dateToday = Date.now();

            var result = "The upcoming event name is " + event.eventTitle;

            if (dateToday < eventDate) {
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
        }).sort({ datePosted: -1 });
    }
    else if (intent_name == "Events - upcoming - more - date & time") {
        Event.find({}, function (err, events) {
            const event = events[0];
            let eventDate = Date.parse(event.startDate);
            let dateToday = Date.now();

            var result = "The upcoming event will start at " + event.startDate + " " + event.timeStart + " and will be end at " + event.endDate + " " + event.timeEnds + ".";

            if (dateToday < eventDate) {
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
        }).sort({ datePosted: -1 });
    }
    else if (intent_name == "Events - upcoming - more - location") {
        Event.find({}, function (err, events) {
            const event = events[0];
            let eventDate = Date.parse(event.startDate);
            let dateToday = Date.now();

            var result = "The upcoming event location is " + event.eventLocation;

            if (dateToday < eventDate) {
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
        }).sort({ datePosted: -1 });
    }

    else if (intent_name == "Events - upcoming - more - details") {
        Event.find({}, function (err, events) {
            const event = events[0];
            let eventDate = Date.parse(event.startDate);
            let dateToday = Date.now();

            var result = "The upcoming event detail is " + event.eventDetails;

            if (dateToday < eventDate) {
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
        }).sort({ datePosted: -1 });
        // const log21 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });

    }
    else if (intent_name == "Events - upcoming - more - process") {
        Event.find({}, function (err, events) {
            const event = events[0];
            let eventDate = event.startDate;
            let dateToday = Date.now();

            var result = "The upcoming event process is " + event.eventProcess;

            if (dateToday < eventDate) {
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
        })
            .sort({ datePosted: -1 });
        // const log22 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });
    }
    else if (intent_name == "Events - upcoming - more - participants") {
        Event.find({}, function (err, events) {
            const event = events[0];
            let eventDate = event.startDate;
            let dateToday = Date.now();

            var result = "The upcoming event participant is " + event.eventParticipant;

            if (dateToday < eventDate) {
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
        })
            .sort({ datePosted: -1 });
        // const log23 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });

    }
    else if (intent_name == "Events - upcoming - more - requirements") {
        Event.find({}, function (err, events) {
            const event = events[0];
            let eventDate = event.startDate;
            let dateToday = Date.now();

            var result = "The upcoming event requirement is " + event.eventRequire;

            if (dateToday < eventDate) {
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
        })
            .sort({ datePosted: -1 });
    }

}

module.exports = _Event;