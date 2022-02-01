'use strict';

const mongoose = require('mongoose');
const Illness = require('../../models/Illness');
const LogQuery = require('../../models/Logs');

async function _Illness(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    const value = req.body.queryResult.queryText;
    const recentLog = await LogQuery.findOne().sort({ datePosted: -1 });

    console.log("The Intent Name: " + intent_name);
    console.log("The Query Text: " + value);
    console.log("The Recent Log: " + recentLog);

    // const recentLog = await LogQuery.findOne().sort({ datePosted: -1 });
    // const query = recentLog.query;
    // console.log("Intent Name: " + intent_name);
    // console.log("Query Text: " + value);
    // console.log("Recent Log Query: " + query);

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
                            // result
                        ]
                    }
                }
            ]
        });
        const log1 = new LogQuery({
            query: value,
            isAnswered: true,
        });
        await log1.save();
    }
    else if (intent_name == 'Illness - more') {
        const recentLog = await LogQuery.findOne({ isAnswered: true }).sort({ datePosted: -1 });
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

        const log2 = new LogQuery({
            query: value,
            isAnswered: true,
        });
        await log2.save();

    }
    else if (intent_name == 'Illness - more - details') {
        const recentLog = await LogQuery.findOne({ isAnswered: true }).sort({ datePosted: -1 });
        const value = req.body.queryResult.queryText;
        const query = recentLog.query;
        const illness = await Illness.find({ title: query });

        res.json({
            "fulfillmentMessages": [
                {
                    "quickReplies": {
                        "title": illness[0].detail,
                        "quickReplies": [
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
        // const log3 = new LogQuery({
        //     query: value,
        //     isAnswered: false,
        // });
        // await log3.save();
    }
    else if (intent_name == 'Illness - more - symptoms') {
        const recentLog = await LogQuery.findOne({ isAnswered: true }).sort({ datePosted: -1 });
        const value = req.body.queryResult.queryText;
        const query = recentLog.query;
        const illness = await Illness.find({ title: query });

        res.json({
            "fulfillmentMessages": [
                {
                    "quickReplies": {
                        "title": illness[0].symptoms,
                        "quickReplies": [
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
        // const log4 = new LogQuery({
        //     query: value,
        //     isAnswered: false,
        // });
        // await log4.save();
    }
    else if (intent_name == 'Illness - more - treatment') {
        const recentLog = await LogQuery.findOne({ isAnswered: true }).sort({ datePosted: -1 });
        const value = req.body.queryResult.queryText;
        const query = recentLog.query;
        const illness = await Illness.find({ title: query });

        res.json({
            "fulfillmentMessages": [
                {
                    "quickReplies": {
                        "title": illness[0].treatment,
                        "quickReplies": [
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
        // const log5 = new LogQuery({
        //     query: value,
        //     isAnswered: false,
        // });
        // await log5.save();
    }
    else if (intent_name == 'Illness - more - prevention') {
        const recentLog = await LogQuery.findOne({ isAnswered: true }).sort({ datePosted: -1 });
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
                        "title": illness[0].prevention,
                        "quickReplies": [
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
        // const log6 = new LogQuery({
        //     query: value,
        //     isAnswered: false,
        // });
        // await log6.save();
    }


    // else {
    //     const log = new LogQuery({
    //         query: value,
    //         isAnswered: false,
    //     });
    //     await log.save();
    // }
}

module.exports = _Illness