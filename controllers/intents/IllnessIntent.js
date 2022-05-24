'use strict';

const mongoose = require('mongoose');
const Illness = require('../../models/Illness');
const queryLog = require('../../models/QueryLog');

async function _Illness(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    const value = req.body.queryResult.queryText;
    const recentLog = await queryLog.findOne().sort({ datePosted: -1 });

    console.log("The Intent Name: " + intent_name);
    console.log("The Query Text: " + value);
    console.log("The Recent Log: " + recentLog);


    if (intent_name == 'Illness') {
        const illness = await Illness.find();
        const illnesses = [];
        for (let i in illness) {
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
                            
                        ]
                    }
                }
            ]
        });
        const log1 = new queryLog({
            query: value,
            isAnswered: true,
        });
        await log1.save();
    }
    else if (intent_name == 'Illness - more') {
        const recentLog = await queryLog.findOne({ isAnswered: true }).sort({ datePosted: -1 });
        // console.log(recentLog);
        const value = req.body.queryResult.queryText;
        res.json({
            "fulfillmentMessages": [
                {
                    "quickReplies": {
                        "title": "What would you like to know more about " + value + "?",
                        "quickReplies": [
                            " Details",
                            " Symptoms",
                            " Treatment",
                            " Prevention",
                            "[Go Back]",

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

        const log2 = new queryLog({
            query: value,
            isAnswered: true,
        });
        await log2.save();

    }
    else if (intent_name == 'Illness - more - details') {
        const recentLog = await queryLog.findOne({ isAnswered: true }).sort({ datePosted: -1 });
        const value = req.body.queryResult.queryText;
        const query = recentLog.query;
        const illness = await Illness.find({ title: query });

        res.json({
            "fulfillmentMessages": [
                {
                    "quickReplies": {
                        "title": illness[0].detail+".",
                        "quickReplies": [
                            "Details",
                            "Symptoms",
                            "Treatment",
                            "Prevention",
                            "[Go Back]",

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
       
    }
    else if (intent_name == 'Illness - more - symptoms') {
        const recentLog = await queryLog.findOne({ isAnswered: true }).sort({ datePosted: -1 });
        const value = req.body.queryResult.queryText;
        const query = recentLog.query;
        const illness = await Illness.find({ title: query });

        res.json({
            "fulfillmentMessages": [
                {
                    "quickReplies": {
                        "title": illness[0].symptoms+".",
                        "quickReplies": [
                            "Details",
                            "Symptoms",
                            "Treatment",
                            "Prevention",
                            "[Go Back]",

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
       
    }
    else if (intent_name == 'Illness - more - treatment') {
        const recentLog = await queryLog.findOne({ isAnswered: true }).sort({ datePosted: -1 });
        const value = req.body.queryResult.queryText;
        const query = recentLog.query;
        const illness = await Illness.find({ title: query });

        res.json({
            "fulfillmentMessages": [
                {
                    "quickReplies": {
                        "title": illness[0].treatment+".",
                        "quickReplies": [
                            "Details",
                            "Symptoms",
                            "Treatment",
                            "Prevention",
                            "[Go Back]",

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
     
    }
    else if (intent_name == 'Illness - more - prevention') {
        const recentLog = await queryLog.findOne({ isAnswered: true }).sort({ datePosted: -1 });
        const value = req.body.queryResult.queryText;
        const query = recentLog.query;
        const illness = await Illness.find({ title: query });

        console.log("Intent Name: " + intent_name);
        console.log("Query Text: " + value);
        console.log("Recent Log Query: " + query);

        res.json({
            "fulfillmentMessages": [
                {
                    "quickReplies": {
                        "title": illness[0].prevention+".",
                        "quickReplies": [
                            "Details",
                            "Symptoms",
                            "Treatment",
                            "Prevention",
                            "[Go Back]",

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
    }
    else if (intent_name == "Default Fallback Intent"){
        const log = new queryLog({
            query: value,
            isAnswered: false,
        });
        await log.save();
        console.log(value);
    }
}

module.exports = _Illness