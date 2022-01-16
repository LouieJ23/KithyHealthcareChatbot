'use strict';

const mongoose = require('mongoose');
const Event = require('../models/Events');
const Department = require('../models/Departments');
const StaffInfo = require('../models/Staffs');
const Guidelines = require('../models/Guidelines');
const CenterInfo = require('../models/CenterInfo');
const MildIllness = require('../models/Illness')
const Appointment = require('../models/Appointment');
const Admin = require('../routes/admin');


function _Event(req, res) {
    let suggest = req.body.queryResult.parameters.event[0];
    console.log(suggest === 'latest');

    if (suggest === 'latest') {
            Event.find({}, function (err, events) {
                const event = events[0];
                var result = "The " + event.eventTitle + " will be going to held  in " + event.eventLocation + ". So in order to participate to the event, you are required to bring " + event.eventRequire + ". The process is to " + event.eventProcess + " and the participants are " + event.eventParticipant;
                // res.json({
                //     "fulfillmentText": result,
                //     "outputContexts": []
                // });

                res.json({
                    "fulfillment_messages": [{
                      "payload": {
                        "richContent": [
                          [
                              {
                            "text": "Go to google",
                            "type": "button",
                            "icon":{
                                "type" : "link",
                                "color" : "#fff"
                            }
                          }]
                        ]
                      }
                    }]
                  
                  });
            }).sort({ datePosted: -1 });
    }
    else if (suggest === 'previous') {
        Event.find({}, function (err, events) {
            const event = events[1];
            var result = "The recent event is " + event.eventTitle + " was held at " + event.eventLocation + ". The participants were required to  " + event.eventRequire + ". The process is:  " + event.eventProcess + " and the participants are " + event.eventParticipant;
            res.json({
                "fulfillmentText": result,
                "outputContexts": []
            });
        }).sort({ datePosted: -1 });
}
    else {
        res.json({
            "fulfillmentText": req.body.queryResult.fulfillmentMessages.text.text[0],
            "outputContexts": []
        });
    }

    // if (suggest == "Past" && suggests == "Events - past") {
    //     Event.findOne({}, function (err, events) {
    //         var result = "The Past Event was " + events.eventTitle + " was held  in " + events.eventLocation + ". The participants was required to " + events.eventRequire + ". They were need to follow the steps " + events.eventProcess + " and the participants were " + events.eventParticipants;
    //         res.json({
    //             "fulfillmentText": result,
    //             "outputContexts": []
    //         });
    //     }).sort({ datePosted: -1 });
    // }
}

// else {
//     Event.findOne({ eventLocation: { $regex: /Location/ } }, function (err, events) {
//         var result = "The previous event is " + events.eventTitle + " was held in " + events.eventLocation + ". The requirement for this event is/are: " + events.eventRequire + ". The process is to " + events.eventProcess + " and the participants are " + events.eventParticipants;
//         // console.log(events);
//         res.json({
//             "fulfillmentText": result,
//             "outputContexts": []
//         });
//     }).sort({ datePosted: 1 });
// }
// console.log(suggest);

//     if (event == "previous") {
//         Event.findOne({}, function (err, events) {
//             if (err) {
//                 return res.json({
//                     speech: 'Something went wrong!',
//                     displayText: 'Something went wrong!',
//                 });
//             }

//             if (events) {
//                 var requiredEvent;
//                 for (var i = 0; i < events.length; i++) {
//                     var event = events[i];
//                     var convertedCurrentDate = new Date();
//                     var convertedEventDate = new Date(event.date);

//                     if (convertedEventDate < convertedCurrentDate) {
//                         var result = "The previous event is " + events.eventTitle + " was held in " + events.eventLocation + ". The requirement for this event is/are: " + events.eventRequire + ". The process is to " + events.eventProcess + " and the participants are " + events.eventParticipants;
//                                 // console.log(events);
//                                 res.json({
//                                     "fulfillmentText": result,
//                                     "outputContexts": []
//                                 });
//                     }
//                 }
//             }
//         });
//     }
//     else {
//         return res.json({
//             speech: 'Next game schedules will be available soon',
//             displayText: 'Next game schedules will be available soon',
//             source: 'game schedule'
//         });
//     }
// }




//     var result = "The previous event is " + events.eventTitle + " was held in " + events.eventLocation + ". The requirement for this event is/are: " + events.eventRequire + ". The process is to " + events.eventProcess + " and the participants are " + events.eventParticipants;
//     res.json({
//         "fulfillmentText": result,
//         "outputContexts": []
//     });
// }).sort({ datePosted: -1 });


// }
// else {

//     Event.findOne({ eventLocation: { $regex: /Location/ }}, function (err, events) {
//         var result = "The previous event is " + events.eventTitle + " was held in " + events.eventLocation + ". The requirement for this event is/are: " + events.eventRequire + ". The process is to " + events.eventProcess + " and the participants are " + events.eventParticipants;
//         // console.log(events);
//         res.json({
//             "fulfillmentText": result,
//             "outputContexts": []
//         });
//     }).sort({ datePosted: 1 });
// }
// // console.log(suggest);


// }


exports.processRequests = (req, res) => {
    
    _Event(req, res);

    // if (req.body.queryResult.intent.displayName == "Events - past") {
    //     _Event(req, res);
    // }
    // else {
    //     res.json({
    //         "fulfillmentText": req.body.queryResult.fulfillmentMessages.text.text[0],
    //         "outputContexts": []
    //     });
    // }



};

