'use strict';

const mongoose = require('mongoose');
const Illness = require('../../models/Illness');
const LogQuery = require('../../models/Logs');

async function _Illness(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    const value = req.body.queryResult.queryText;
    console.log(intent_name);

    if (intent_name == 'Illness') {
        const illness = await Illness.find();
        const illnesses = [];
        for(let i in illness){
            illnesses.push(illness[i].title);
        }

        const recentLog = await LogQuery.findOne().sort({datePosted: -1});
        console.log(recentLog);

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
        const log = new LogQuery({
            query: value,
            isAnswered: true,
        });
        await log.save();    
    }
    if (intent_name == 'Illness - more') {
            const recentLog = await LogQuery.findOne().sort({datePosted: -1});
            console.log(recentLog);

            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "What would you like to know more about " + value + "?",
                            "quickReplies": [
                                " Title",
                                " Details",
                                " Symptoms",
                                " Treatment",
                                " Prevention",
                                " Go Back"
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

        const log = new LogQuery({
            query: value,
            isAnswered: true,
        });
        await log.save();   

    }
    if (intent_name == 'Illness - more - details') {
        Illness.find({title: "Diarrhea" }, function (err, illness) {
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

module.exports = _Illness;