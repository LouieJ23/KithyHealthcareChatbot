const router = require('express').Router();
const Appointment = require('../models/Scheduling');

router.get('/', async (req, res) => {
//     try {
//         const event = await Event.find();
//         res.json(event);
//     }
//     catch(err) {
//         res.json({
//             message: err
//         });
//     }
    res.sendFile(__dirname + "/scheduling.html");
});

// router.get('/:postID', async (req, res) => {
//     try {
//         const post = await Event.findById(req.params.postID);
//         res.json(post);
//     }
//     catch (err) {
//         res.json({
//             message: err
//         });
//     }
// });


router.post('/', async (req, res) => {
    const appointment = new Appointment({
        eventTitle: req.body.eventTitle,
        eventLocation: req.body.eventLocation,
        eventDetails: req.body.eventDetails,
        eventDate: {
            startDateTime: req.body.startDateTime,
            endDateTime: req.body.endDateTime
        },
        eventRequire: req.body.eventRequire,
        eventProcess: req.body.eventProcess,
        eventParticipant: req.body.eventParticipant,
        datePosted: req.body.datePosted
    });

    try {
        const savedAppointmentvent = await appointment.save();
        res.json(savedAppointment);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
    // console.log(req.body);
});

router.delete('/:postID', async (req, res) => {
    try {
        const removeAppointment = await Appointment.remove({
            _id: req.params.post
        });
        res.json(removeAppointment);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

router.patch('/:postID', async (req, res) => {
    try {
        const updatedAppointment = await Appointment.updateOne(
            {
                _id: req.params.postID,
            },
            {
                $set:
                {
                    title: req.body.title
                }
            }
        );

        res.json(updatedAppointment);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;