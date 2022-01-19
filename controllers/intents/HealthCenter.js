'use strict';

const mongoose = require('mongoose');
const hCenter = require('../../models/CenterInfo');

function _HealthCenter(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    // console.log(intent_name);
    // if (intent_name == "Health Center") {
    //     // hCenter.findOne({}, function (err, centerInfo) {
    //         // var result = "The health center of Kitaotao is founded on  " + centerInfo.dateOfFounding;
            
    //         res.json({
    //             "fulfillmentMessages": [
    //                 {
    //                     "quickReplies": {
    //                         "title": "",
    //                         "quickReplies": [
    //                             "Date of Founding",
    //                             "Published by",
    //                             "Location",
    //                             "Contact Number",
    //                             "Email Address",
    //                             "Mission",
    //                             "Vision"
                               
    //                         ]
    //                     },
    //                     "platform": "FACEBOOK"
    //                 },
    //                 {
    //                     "text": {
    //                         "text": [
    //                             ""
    //                         ]
    //                     }
    //                 }
    //             ]
    //         });
    //     // })
    // }
   
   
    if (intent_name == "Health Center - date of founding") {
        hCenter.findOne({}, function (err, centerInfo) {
            var result = "The health center of Kitaotao was founded on  " + centerInfo.dateOfFounding;
            
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Go Back",
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
    if (intent_name == "Health Center - published by") {
        hCenter.findOne({}, function (err, centerInfo) {
            var result = "The health center of Kitaotao was published by " + centerInfo.publishedBy;
            
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Go Back",
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
    if (intent_name == "Health Center - location") {
        hCenter.findOne({}, function (err, centerInfo) {
            var result = "The health center of Kitaotao is located at " + centerInfo.location;
            
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Go Back",
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
    if (intent_name == "Health Center - contact number") {
        hCenter.findOne({}, function (err, centerInfo) {
            var result = "The health center of Kitaotao can be reached through this number " + centerInfo.phoneNumber;
            
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Go Back",
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
    if (intent_name == "Health Center - email address") {
        hCenter.findOne({}, function (err, centerInfo) {
            var result = "The health center of Kitaotao can be reached through this email address " + centerInfo.email;
            
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Go Back",
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
    if (intent_name == "Health Center - mission") {
        hCenter.findOne({}, function (err, centerInfo) {
            var result = "The mission of Kitaotao Health Center is " + centerInfo.mission;
            
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Go Back",
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
    if (intent_name == "Health Center - vision") {
        hCenter.findOne({}, function (err, centerInfo) {
            var result = "The vision of Kitaotao Health Center is " + centerInfo.vision;
            
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Go Back",
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

}
module.exports = _HealthCenter;