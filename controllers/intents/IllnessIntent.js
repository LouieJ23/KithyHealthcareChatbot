'use strict';

const mongoose = require('mongoose');
const Illness = require('../../models/Illness');
const LogQuery = require('../../models/Logs');

async function _Illness(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    const value = req.body.queryResult.queryText;
    console.log("Intent Name: " + intent_name);
    console.log("Query Text: " +value);

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
        const log1 = new LogQuery({
            query: value,
            isAnswered: true,
        });
        await log1.save();    
    }
    else if (intent_name == 'Illness - more') {
            const recentLog = await LogQuery.findOne().sort({datePosted: -1});
            // console.log(recentLog);
            const value = req.body.queryResult.queryText;
            const query = recentLog.query;
            console.log("Intent Name: " + intent_name);
            console.log("Query Text: " + value);
            console.log("Recent Log Query: " + query);
            console.log("Recent Log: " + recentLog);


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

        const log2 = new LogQuery({
            query: value,
            isAnswered: true,
        });
        await log2.save();   

    }
    else if (intent_name == 'Illness - more - details') {
            const log = await LogQuery.findOne({isAnswered:true}).sort({datePosted: -1});
            const query = log.query;
            const illness = await Illness.find({title: query});
            console.log(recentLog);

            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": illness[0].detail,
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
            const log3 = new LogQuery({
                query: value,
                isAnswered: true,
            });
            await log3.save();   
    }
    else if (intent_name == 'Illness - more - symptoms') {
        const log = await LogQuery.findOne({isAnswered:true}).sort({datePosted: -1});
        const query = log.query;
        const illness = await Illness.find({title: query});
        console.log(recentLog);

        res.json({
            "fulfillmentMessages": [
                {
                    "quickReplies": {
                        "title": illness[0].symptoms,
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
        const log4 = new LogQuery({
            query: value,
            isAnswered: true,
        });
        await log4.save();   
}
else if (intent_name == 'Illness - more - treatment') {
    const log = await LogQuery.findOne({isAnswered:true}).sort({datePosted: -1});
    const query = log.query;
    const illness = await Illness.find({title: query});
    console.log(recentLog);

    res.json({
        "fulfillmentMessages": [
            {
                "quickReplies": {
                    "title": illness[0].treatment,
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
    const log5 = new LogQuery({
        query: value,
        isAnswered: true,
    });
    await log5.save();   
}
    
    else {
        const log = new LogQuery({
            query: value,
            isAnswered: false,
        });
        await log.save();   
    }
}

module.exports = _Illness;