'use strict';

const mongoose = require('mongoose');
const Hotline = require('../../models/Hotline');
const HotlineLogQuery = require('../../models/Logs');

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
                results += (hotlines[i].hotlineName + "\n" + hotlines[i].number + "\n" + hotlines[i].email + "\n" + hotlines[i].facebookPage + "\n");
            }
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": results,
                            "quickReplies": [
                                "Department",
                                "Event",
                                "Guidelines",
                                "Hotline",
                                "Illness",
                                "Hotline",
                                "Staff",
                                "Visit Site",
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
        // const log1 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true,
        // });
        // await log1.save();
    }

}

module.exports = _Hotline;