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

    if (intent_name == 'Events') {
        Event.find({}, function (err, events) {
            const event = events[0];
            // var result = "The latest event name is " + event.eventTitle;
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "What would you like to know about Event?",
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

        // const log1 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true,
        // });
        // await log1.save();
    }
    else if ((intent_name == "Events - latest") || intent_name == "Latest Event") {
        Event.find({}, function (err, events) {
            const event = events[0];
            var result = "The latest events " + event.eventTitle + " will be going to held  in " + event.eventLocation + ". So in order to participate to the event, you are required to bring " + event.eventRequire + ". The process is to " + event.eventProcess + " and the participants are " + event.eventParticipant;

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
        // const log2 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });
        // await log2.save();
    }
    else if ((intent_name == "Events - latest - more - event title") || intent_name == "Latest Event - event title") {
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
        // const log3 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // })
        // await log3.save();
    }
    else if ((intent_name == "Events - latest - more - Date & Time") || intent_name == "Latest Event - date & time") {
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
        // const log4 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });
        // await log4.save();
    }

    else if ((intent_name == "Events - latest - more - @location") || intent_name == "Latest Event - location") {
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
        // const log5 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });
        // await log5.save();
    }

    else if ((intent_name == "Events - latest - more - @details") || intent_name == "Latest Event - details") {
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
        // const log6 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });
        // await log6.save();
    }

    else if ((intent_name == "Events - latest - more - @requirements") || intent_name == "Latest Event - requirements") {
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
        // const log7 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });
        // await log7.save();
    }

    else if ((intent_name == "Events - latest - more - @process") || intent_name == "Latest Event - process") {
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
        // const log8 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });
        // await log8.save();
    }

    else if ((intent_name == "Events - latest - more - @participants") || intent_name == "Latest Event - participants") {
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
        // const log9 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });
        // await log9.save();
    }

    //PREVIOUS EVENT FUNCTION
    else if ((intent_name == "Previous Event") || intent_name == "Events - previous") {
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous event was " + event.eventTitle + "  and to held  at " + event.eventLocation + ". So in order to participate to the event, you are required to bring " + event.eventRequire + ". The process is to " + event.eventProcess + " and the participants are " + event.eventParticipant;


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


    else if ((intent_name == 'Events - previous - more2 - name') || (intent_name == "Previous Event - name")) {
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous events name is " + event.eventTitle;


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
    else if ((intent_name == 'Events - previous - more2 - details') || (intent_name == "Previous Event - details")) {
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous events' details is" + event.eventDetails;


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
    else if ((intent_name == 'Events - previous - more2 - process') || (intent_name == "Previous Event - process")) {
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous events' process is " + event.eventProcess;


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
    else if ((intent_name == "Events - previous - more2 - participants") || (intent_name == "Previous Event - participants")) {
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous events' participants is " + event.eventParticipant;


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
    else if ((intent_name == "Events - previous - more2 - location") || (intent_name == "Previous Event - location")) {
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous events' location is " + event.eventLocation;


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
    else if ((intent_name == "Events - previous - more2 - requirements") || (intent_name == "Previous Event - requirements")) {
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous events' requirements is " + event.eventRequire;


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
    else if (intent_name == 'Events - upcoming') {
        Event.find({}, function (err, events) {
            const event = events[0];
            let eventDate = event.datePosted;
            let dateToday = Date.now();

            var result = "The upcoming event " + event.eventTitle + " will be going to held  in " + event.eventLocation + ". So in order to participate to the event, you are required to bring " + event.eventRequire + ". The process is to " + event.eventProcess + " and the participants are " + event.eventParticipant;

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
        // const log18 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });
    }
    else if (intent_name == "Events - upcoming - more3 - name") {
        Event.find({}, function (err, events) {
            const event = events[0];
            let eventDate = event.datePosted;
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
        // const log19 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });
    }
    else if (intent_name == "Events - upcoming - more3 - location") {
        Event.find({}, function (err, events) {
            const event = events[0];
            let eventDate = event.datePosted;
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
        })
            .sort({ datePosted: -1 });
        // const log20 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });
    }

    else if (intent_name == "Events - upcoming - more3 - details") {
        Event.find({}, function (err, events) {
            const event = events[0];
            let eventDate = event.datePosted;
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
        })
            .sort({ datePosted: -1 });
        // const log21 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true
        // });

    }
    else if (intent_name == "Events - upcoming - more3 - process") {
        Event.find({}, function (err, events) {
            const event = events[0];
            let eventDate = event.datePosted;
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
    else if (intent_name == "Events - upcoming - more3 - participants") {
        Event.find({}, function (err, events) {
            const event = events[0];
            let eventDate = event.datePosted;
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
    else if (intent_name == "Events - upcoming - more3 - requirements") {
        Event.find({}, function (err, events) {
            const event = events[0];
            let eventDate = event.datePosted;
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