'use strict';

const mongoose = require('mongoose');
const Illness = require('../../models/Illness');

async function _Illness(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    console.log(intent_name);
    if (intent_name == 'Illness') {
        const a = await Illness.find();
        console.log(a);
        res.json({
            "fulfillmentMessages": [
                {
                    "quickReplies": {
                        "title": "What would you like to know about Illness?",
                        "quickReplies": ["sample"]
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
        // Illness.find({}, function (err, illness) {
        //     const illnesses = [];
        //     for(let i in illness){
        //         illnesses.push(illness[i].title);
        //     }

        //     res.json({
        //         "fulfillmentMessages": [
        //             {
        //                 "quickReplies": {
        //                     "title": "What would you like to know about Illness?",
        //                     "quickReplies": illnesses
        //                 },
        //                 "platform": "FACEBOOK"
        //             },
        //             {
        //                 "text": {
        //                     "text": [
        //                         ""
        //                         // result
        //                     ]
        //                 }
        //             }
        //         ]
        //     });

        //     console.log(illnesses);
        // });

        
    }
    // if (intent_name == 'Illness - more') {
    //     Illness.find({}, function (err, illness) {
    //         const value = req.body.queryResult.queryText;

    //         res.json({
    //             "fulfillmentMessages": [
    //                 {
    //                     "quickReplies": {
    //                         "title": "What would you like to know about " + value + "?",
    //                         "quickReplies": [
    //                             value + " Title",
    //                             value + " Details",
    //                             value + " Symptoms",
    //                             value + " Treatment",
    //                             value + " Prevention",
    //                             value + " Go Back"
    //                         ]
    //                     },
    //                     "platform": "FACEBOOK"
    //                 },
    //                 {
    //                     "text": {
    //                         "text": [
    //                             ""
    //                             // result
    //                         ]
    //                     }
    //                 }
    //             ]
    //         });
    //     });

    // }
    // if (intent_name == 'Illness - more - Details') {
    //     Illness.find({title: "diarhhea" }, function (err, illness) {
    //         const illnesses = [];
    //         for(let i in illness){
    //             illnesses.push(illness[i].detail);
    //         }

    //         res.json({
    //             "fulfillmentMessages": [
    //                 {
    //                     "quickReplies": {
    //                         "title": "What would you like to know about " + req.body.queryResult.queryText + "?",
    //                         "quickReplies": [
    //                             "Title",
    //                             "Details",
    //                             "Symptoms",
    //                             "Treatment",
    //                             "Prevention",
    //                             "Go Back"
    //                         ]
    //                     },
    //                     "platform": "FACEBOOK"
    //                 },
    //                 {
    //                     "text": {
    //                         "text": [
    //                             ""
    //                             // result
    //                         ]
    //                     }
    //                 }
    //             ]
    //         });
    //     });

    // }
}

module.exports = _Illness;