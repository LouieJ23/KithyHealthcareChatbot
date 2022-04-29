'use strict';

const mongoose = require('mongoose');
const Guideline = require('../../models/Guidelines');
const GuidelineLogQuery = require('../../models/QueryLog');

// EVENT LATEST FUNCTION
async function _Guideline(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    const value = req.body.queryResult.queryText;
    const recentLog = await GuidelineLogQuery.findOne().sort({ datePosted: -1 });

    console.log("The Intent Name: " + intent_name);
    console.log("The Query Text: " + value);
    console.log("The Recent Log: " + recentLog);

    if (intent_name == 'Guidelines') {
        let guidelines = await Guideline.find({});
            let results = "";
            for (let i = 0; i < guidelines.length; i++) {
                results += ("\n" + "Act Number: " + guidelines[i].actNo + "\n" + "Title: "+ guidelines[i].title + "\n" + "Detail: " + guidelines[i].detail + "\n");
            }
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "This are the Health Center Guidelines: "+ results + "\n",
                            "quickReplies": [
                                "Department",
                                "Events",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
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
      
    }

}

module.exports = _Guideline;