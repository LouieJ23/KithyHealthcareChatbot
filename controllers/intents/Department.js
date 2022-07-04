'use strict';

const mongoose = require('mongoose');
const Department = require('../../models/Departments');

async function _Department(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;

    if (intent_name == 'Department') {
        let departments = await Department.find({});
        let results = "";
        for (let i = 0; i < departments.length; i++) {
            results += (departments[i].depName + "\n" + "Time Open: "+departments[i].timeStart + " - " + "Time Close: "+ departments[i].timeEnd + "\n" + "Detail: " + departments[i].depDetail + "\n" + "\n");
        }
        res.json({
            "fulfillmentMessages": [
                {
                    "quickReplies": {
                        "title": results,
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
module.exports = _Department;