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
        Hotline.find({}, function (err, hotline) {
            var results= result;
            for (let i = 0; i < hotline.length; i++) {
                var result = (hotline.name + "\n" + hotline.number + "\n" + hotline.email + "\n" + hotline.facebookPage + "\n");
            }
            // const hotline = hotline[0];
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
        });

        // const log1 = new EventLogQuery({
        //     query: value,
        //     isAnswered: true,
        // });
        // await log1.save();
    }

}

module.exports = _Hotline;