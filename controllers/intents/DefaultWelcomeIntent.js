'use strict';

const mongoose = require('mongoose');
const DefLogQuery = require('../../models/QueryLog');

async function _DefaultWelcomeIntent(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    const value = req.body.queryResult.queryText;

    if (value == "Get Started") {
        res.json({
            "fulfillmentMessages": [
                {
                    "quickReplies": {
                        "title": "Please select what you want to do next.",
                        "quickReplies": [
                            "More",
                            "Department",
                            "Events",
                            "Health Center",
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
        const log = new DefLogQuery({
            query: value,
            isAnswered: true
        });
        console.log(value);
    }
   
}
module.exports = _DefaultWelcomeIntent; 