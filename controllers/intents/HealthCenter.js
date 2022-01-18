'use strict';

const mongoose = require('mongoose');
const hCenter = require('../../models/CenterInfo');

function _HealthCenter(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    if ((intent_name == "Events - latest - more1 - name") || (intent_name == "Events - latest - more - name")) {
        hCenter.find({}, function (err, centerInfos) {
            const centerInfo = centerInfos[0];
            var result = "The health center of Kitaotao is founded on  " + centerInfo.dateOfFounding;

            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Date of Founding",
                                "Published by",
                                "Location",
                                "Contact Number",
                                "Email Address",
                                "Mission",
                                "Vision"
                               
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
        })
    }
    else {
        res.json({
            "fulfillmentMessages": [
                {
                    "quickReplies": {
                       
                        "quickReplies": [
                            "Date of Founding",
                            "Published by",
                            "Location",
                            "Contact Number",
                            "Email Address",
                            "Mission",
                            "Vision"
                           
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

module.exports = _HealthCenter;