'use strict';

const mongoose = require('mongoose');
const DefLogQuery = require('../../models/QueryLog');

async function _DefaultWelcomeIntent(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    const value = req.body.queryResult.queryText;

    if (intent_name == "Default Welcome Intent") {
        res.json({
            "fulfillmentMessages": [
                {
                    "quickReplies": {
                        "title": result,
                        "quickReplies": [
                            "More",
                            "Department",
                            "Events",
                            "Health Center",
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
        })
        const log = new DefLogQuery({
            query: value,
            isAnswered: true
        });
        console.log(value);
    }
   
}
module.exports = _DefaultWelcomeIntent; 