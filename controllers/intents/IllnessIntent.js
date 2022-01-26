'use strict';

const mongoose = require('mongoose');
const Illness = require('../../models/Illness');

function _Illness(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    console.log(intent_name);
    if (intent_name == 'Illness') {
        Illness.find({}, function (err, illness) {
            const illnesses = [];
            for(let i in illness){
                illnesses.push(illness[i].title);
            }

            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "What would you like to know about Illness?",
                            "quickReplies": illnesses
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

            console.log(illnesses);
        });

    }
    if (intent_name == 'Illness - more') {
        Illness.find({}, function (err, illness) {
            const illnesses = [];
            for(let i in illness){
                illnesses.push(illness[i].title);
            }

            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "What would you like to know about " + req.body.queryResult.queryText + "?",
                            "quickReplies": [
                                "Title",
                                "Details",
                                "Symptoms",
                                "Treatment",
                                "Prevention",
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

    }
    if (intent_name == 'Illness - more - Details') {
        const value = req.body.queryResult.queryText;
        if(value == "Title") {
            Illness.find({}, function (err, illness) {
                const illnesses = [];
                for(let i in illness){
                    illnesses.push(illness[i].detail);
                }
    
                res.json({
                    "fulfillmentMessages": [
                        {
                            "quickReplies": {
                                "title": "Title",
                                "quickReplies": [
                                    "Title",
                                    "Details",
                                    "Symptoms",
                                    "Treatment",
                                    "Prevention",
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
        }
        else {
            Illness.find({}, function (err, illness) {
                const illnesses = [];
                for(let i in illness){
                    illnesses.push(illness[i].detail);
                }
    
                res.json({
                    "fulfillmentMessages": [
                        {
                            "quickReplies": {
                                "title": "What would you like to know about " + req.body.queryResult.queryText + "?",
                                "quickReplies": [
                                    "Title",
                                    "Details",
                                    "Symptoms",
                                    "Treatment",
                                    "Prevention",
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
        }

    }
}

module.exports = _Illness;