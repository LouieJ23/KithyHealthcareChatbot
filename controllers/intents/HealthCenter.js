'use strict';

const mongoose = require('mongoose');
const hCenter = require('../../models/CenterInfo');

function _HealthCenter(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;

    if (intent_name == "Health Center") {
        hCenter.findOne({}, function (err, centerInfo) {
            var result = "The health center of Kitaotao was founded by  " + centerInfo.publishedBy + " on " + centerInfo.dateOfFounding.toString().slice(0,15) + ", the facility can be located at " + centerInfo.location
            ".  Having a Mission: " + centerInfo.mission + ". And the Vision: " + centerInfo.vision + ". The health center can be reach through this contact number: " + centerInfo.phoneNumber + 
            " and through this email address: " + centerInfo.email + ". \n";
            
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
                                "Vision",
                                "[Go Back]",
                               
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
   
   
    if (intent_name == "Health Center - date of founding") {
        hCenter.findOne({}, function (err, centerInfo) {
            var result = "The health center of Kitaotao was founded on  " + centerInfo.dateOfFounding.toString().slice(0,15);
            

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
                                "Vision",
                                "[Go Back]",
                               
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
                              
                                "Date of Founding",
                                "Published by",
                                "Location",
                                "Contact Number",
                                "Email Address",
                                "Mission",
                                "Vision",
                                "[Go Back]",
                               
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
    if ((intent_name == "Health Center - location") || (intent_name == "Health Center - location")){
        hCenter.findOne({}, function (err, centerInfo) {
            var result = "The health center of Kitaotao is located at " + centerInfo.location;
            
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
                                "Vision",
                                "[Go Back]",
                               
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
            var result = "The health center of Kitaotao can be reached through this number: " + centerInfo.phoneNumber;
            
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
                                "Vision",
                                "[Go Back]",
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
            var result = "The health center of Kitaotao can be reached through this email address: " + centerInfo.email;
            
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
                                "Vision",
                                "[Go Back]",
                               
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
            var result = "The mission of Kitaotao Health Center is. " + centerInfo.mission;
            
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
                                "Vision",
                                "[Go Back]",

                               
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
            var result = "The vision of Kitaotao Health Center is. " + centerInfo.vision;
            
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
                                "Vision",
                                "[Go Back]",

                               
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