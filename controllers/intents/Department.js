'use strict';

const mongoose = require('mongoose');
const Department = require('../../models/Departments');

async function _Department(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;

    if (intent_name == 'Department') {
        let departments = await Department.find({});
        let results = "";
        for (let i = 0; i < departments.length; i++) {
            results += (departments[i].depName + "\n" + departments[i].depSched + "\n" + departments[i].depDetail + "\n" + "\n");
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
module.exports = _Department;