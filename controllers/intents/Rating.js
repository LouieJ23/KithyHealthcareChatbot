'use strict';

const mongoose = require('mongoose');
const Rating = require('../../models/Rating');
const RatingLogQuery = require('../../models/QueryLog');

// EVENT LATEST FUNCTION
async function _Rating(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    const value = req.body.queryResult.queryText;
    const recentLog = await RatingLogQuery.findOne().sort({ datePosted: -1 });

    if (intent_name == 'Rating - yes - custom') {
        // let ratings = await Rating.find({});
            // let results = "";
            // for (let i = 0; i < hotlines.length; i++) {
            //     results += ("\n" + hotlines[i].hotlineName + "\n" + hotlines[i].number + "\n" + hotlines[i].email + "\n" + hotlines[i].facebookPage + "\n");
            // }
            let results="This is from RATINGS"
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "If you require assistance, the following hotlines are accessible: "+ results + "\n",
                            "quickReplies": [
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
            const rating = new RatingLogQuery({
                rate: value,
                // isAnswered: true,
            });
            await rating.save();
    }
}

module.exports = _Rating;