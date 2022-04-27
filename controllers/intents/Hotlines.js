'use strict';

const mongoose = require('mongoose');
const Hotline = require('../../models/Hotline');
const HotlineLogQuery = require('../../models/QueryLog');

// EVENT LATEST FUNCTION
async function _Hotline(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    const value = req.body.queryResult.queryText;
    const recentLog = await HotlineLogQuery.findOne().sort({ datePosted: -1 });

    console.log("The Intent Name: " + intent_name);
    console.log("The Query Text: " + value);
    console.log("The Recent Log: " + recentLog);

    if (intent_name == 'Hotline') {
        let hotlines = await Hotline.find({});
            let results = "";
            for (let i = 0; i < hotlines.length; i++) {
                results += ("\n" + hotlines[i].hotlineName + "\n" + hotlines[i].number + "\n" + hotlines[i].email + "\n" + hotlines[i].facebookPage + "\n");
            }
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "This are the Emergency Hotlines: "+ results + "\n",
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

module.exports = _Hotline;