'use strict';

const mongoose = require('mongoose');
const Illness = require('../../models/Illness');

function _Illness(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    console.log(intent_name);
    if (intent_name == 'Illness') {
        Illness.find({}, function (err, illness) {
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "What would you like to know about Illness?",
                            "quickReplies": [
                                "suka",
                                "sipon",
                                "sakit tiyan"
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

            console.log(illness);
        });

    }
}

module.exports = _Illness;