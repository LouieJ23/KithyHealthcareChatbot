'use strict';

const mongoose = require('mongoose');
const Staff = require('../../models/Staffs');
const StaffLogQuery = require('../../models/QueryLog');

// EVENT LATEST FUNCTION
async function _Staff(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    const value = req.body.queryResult.queryText;
    const recentLog = await StaffLogQuery.findOne().sort({ datePosted: -1 });

    console.log("The Intent Name: " + intent_name);
    console.log("The Query Text: " + value);
    console.log("The Recent Log: " + recentLog);

    if (intent_name == 'Staff') {
        let staffs = await Staff.find({});
            let results = "";
            for (let i = 0; i < staffs.length; i++) {
                results += ("\n" + "Name: " + staffs[i].name + "\n"+ "Sex: " + staffs[i].sex + "\n"+ "Career: " + staffs[i].career + "\n" + "Specialization: "+ staffs[i].specialization + "\n" + "Department: "+ staffs[i].department + "\n" + "Cell Number: " + staffs[i].cellNumber + "\n" + "Email: "+ staffs[i].email + "\n" + "Schedule: "+ staffs[i].day + ", " + staffs[i].time + "\n");
            }
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "This are the Health Center's Staff "+ results + "\n",
                            "quickReplies": [
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
      
    }

}

module.exports = _Staff;