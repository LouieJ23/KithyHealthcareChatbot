const router = require('express').Router();
const Event = require('../models/Events');

router.get('/', async (req, res) => {
    try {
        const event = await Event.find();
        res.render('index', {
            events: event
        });
        // console.log(event.eventDate);
        // res.json(event);
    }
    catch(err) {
        res.json({
            message: err
        });
    }

    
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
    const event = new Event({
        eventTitle: req.body.eventTitle,
        eventLocation: req.body.eventLocation,
        eventDetails: req.body.eventDetails,
        startDateTime: req.body.dateTime,
        endDateTime: req.body.endDateTime,
        eventRequire: req.body.eventRequire,
        eventProcess: req.body.eventProcess,
        eventParticipant: req.body.eventParticipant,
        datePosted: req.body.datePosted
    });

    try {
        const savedEvent = await event.save();
        res.json(savedEvent);
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
        const removeEvent = await Event.remove({
            _id: req.params.post
        });
        res.json(removeEvent);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

router.patch('/:postID', async (req, res) => {
    try {
        const updatedEvent = await Event.updateOne(
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

        res.json(updatedEvent);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;