'use strict';

const mongoose = require('mongoose');
const Event = require('../../models/Events');
const LogQuery = require('../../models/Logs');

// EVENT LATEST FUNCTION
async function _Event(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    const value = req.body.queryResult.queryText;
    const recentLog = await LogQuery.findOne().sort({datePosted: -1});
    console.log("Intent Name: " + intent_name);
    console.log("Query Text: " + value);
    console.log(recentLog);

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
                                "Go Back"
                            ]
                        },
                        "platform": "FACEBOOK"
                    },
                    {
                        "text": {
                            "text": [
                                ""
                                // result
                            ]
                        }
                    }
                ]
            });
        });
        const log1 = new LogQuery({
            query: value,
            isAnswered: true,
        });
        await log1.save();  

    }
   else if (intent_name == "Latest Event") {
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
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
                               
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
    if ((intent_name == "Events - latest - more1 - name") || (intent_name == "Events - latest - more - name") || (intent_name == "Latest Event - name")) {
        Event.find({}, function (err, events) {
            const event = events[0];
            var result = "The latest events name is " + event.eventTitle;


            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
                               
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

    if ((intent_name == "Events - latest - more1 - location") || (intent_name == "Events - latest - more - location") || (intent_name == "Latest Event - location")) {
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
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
                                
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

    if ((intent_name == "Events - latest - more - details") || (intent_name == "Latest Event - details")) {
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
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
                                
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

    if ((intent_name == "Events - latest - more1 - requirements") || (intent_name == "Latest Event - requirements")){
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
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
                               
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

    if ((intent_name == "Events - latest - more1 - process") || (intent_name == "Latest Event - process")){
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
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
                             
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

    if ((intent_name == "Events - latest - more1 - participants") || (intent_name == "Latest Event - participants")) {
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
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
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

     if (intent_name == 'Events - latest') {
        Event.find({}, function (err, events) {
            const event = events[0];
            var result = "The latest event is " + event.eventTitle + " will be going to held  in " + event.eventLocation + ". So in order to participate to the event, you are required to bring " + event.eventRequire + ". The process is to " + event.eventProcess + " and the participants are " + event.eventParticipant;


            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
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


    // EVENT PREVIOUS FUNCTION
    if (intent_name == 'Events - previous') {
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous event is " + event.eventTitle + " will be going to held  in " + event.eventLocation + ". So in order to participate to the event, you are required to bring " + event.eventRequire + ". The process is to " + event.eventProcess + " and the participants are " + event.eventParticipant;


            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
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
    if (intent_name == "Previous Event") {
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous event is " + event.eventTitle + " will be going to held  in " + event.eventLocation + ". So in order to participate to the event, you are required to bring " + event.eventRequire + ". The process is to " + event.eventProcess + " and the participants are " + event.eventParticipant;


            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "More",
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
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
    
    
    if ((intent_name == 'Events - previous - more2 - name') || (intent_name == "Previous Event - name")){
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous events name is " + event.eventTitle;


            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Go Back",
                                "More",
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
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
    if ((intent_name == 'Events - previous - more2 - details') || (intent_name == "Previous Event - details")) {
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous events' details is" + event.eventDetails;


            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Go Back",
                                "More",
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
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
    if ((intent_name == 'Events - previous - more2 - process') || (intent_name == "Previous Event - process")){
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous events' process is " + event.eventProcess;


            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Go Back",
                                "More",
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
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
    if ((intent_name == "Events - previous - more2 - participants") || (intent_name == "Previous Event - participants")){
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous events' participants is " + event.eventParticipant;


            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Go Back",
                                "More",
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
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
    if ((intent_name == "Events - previous - more2 - location") || (intent_name == "Previous Event - location")){
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous events' location is " + event.eventLocation;


            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Go Back",
                                "More",
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
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
    if ((intent_name == "Events - previous - more2 - requirements") || (intent_name == "Previous Event - requirements")){
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The previous events' requirements is " + event.eventRequire;


            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Go Back",
                                "More",
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
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
    if (intent_name == 'Events - upcoming') {
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
                                    "Event",
                                    "Health Center",
                                    "Illness",
                                    "Set Appointment",
                                    "Visit Site",
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
            }


        }).sort({ datePosted: -1 });
    }
    if (intent_name == "Events - upcoming - more3 - name") {
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
                                    "Event",
                                    "Health Center",
                                    "Illness",
                                    "Set Appointment",
                                    "Visit Site",
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
            }


        }).sort({ datePosted: -1 });
    }
    if (intent_name == "Events - upcoming - more3 - location") {
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
                                    "Event",
                                    "Health Center",
                                    "Illness",
                                    "Set Appointment",
                                    "Visit Site",
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
            }
        })
        .sort({ datePosted: -1 });
    }

if (intent_name == "Events - upcoming - more3 - details") {
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
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
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
        }
    })
    .sort({ datePosted: -1 });

}
if (intent_name == "Events - upcoming - more3 - process") {
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
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
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
        }
    })
    .sort({ datePosted: -1 });
}
if (intent_name == "Events - upcoming - more3 - participants") {
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
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
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
        }
    })
    .sort({ datePosted: -1 });

}
if (intent_name == "Events - upcoming - more3 - requirements") {
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
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
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
        }
    })
    .sort({ datePosted: -1 });

}
else {
    const log = new LogQuery({
        query: value,
        isAnswered: false,
    });
    await log.save();   
}
}

module.exports = _Event;