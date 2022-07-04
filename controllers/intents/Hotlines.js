'use strict';

const mongoose = require('mongoose');
const Hotline = require('../../models/Hotline');
const HotlineLogQuery = require('../../models/QueryLog');

// EVENT LATEST FUNCTION
async function _Hotline(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    const value = req.body.queryResult.queryText;
    const recentLog = await HotlineLogQuery.findOne().sort({ datePosted: -1 });

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
                            "title": "If you require assistance, the following hotlines are accessible: "+ results + "\n",
                            "quickReplies": [
                                "About",
                                "Department",
                                "Events",
                                "Health Center",
                                "Hotline",
                                "Illness",
                                "Set Appointment",
                                "Staff",
                                "Visit Site",
                                "☑️Share Feedback",

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