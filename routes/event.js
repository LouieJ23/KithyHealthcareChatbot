const router = require('express').Router();
const Event = require('../models/Events');

router.use((req, res, next) => {
    if (req.query._method == 'DELETE') {
        req.method = 'DELETE';
        req.url = req.path
    }

    if (req.query._method == 'PUT') {
        req.method = 'PUT';
        req.url = req.path
    }
    next();
});



router.get('/', async (req, res) => {
    try {
        const event = await Event.find()
            .sort({ datePosted: -1 });

            console.log(event.length);
        res.render('event', {
            events: event,
            page_name: 'event',
            isPaginate: false
        })


    }
    catch (err) {
        res.json({
            message: err
        });
    }

});

 

router.post('/', async (req, res) => {
    const event = new Event({
        eventTitle: req.body.eventTitle,
        eventLocation: req.body.eventLocation,
        eventDetails: req.body.eventDetails,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        timeStart: req.body.timeStart,
        timeEnds: req.body.timeEnds,
        eventRequire: req.body.eventRequire,
        eventProcess: req.body.eventProcess,
        eventParticipant: req.body.eventParticipant,
        datePosted: req.body.datePosted
    });

    try {
        const savedEvent = await event.save();
        res.redirect(301, '/event');

    }
    catch (err) {
        res.json({
            message: err
        });
    }
    // console.log(req.body);
});

router.get('/:postID', async (req, res) => {
    try {
        const event = await Event.findById(req.params.postID);
        res.render('event', {
            events: event,
            page_name: 'event',
            isPaginate: false
        });
    }
    catch (err) {
        res.json({
            message: err
        })
    }
})

router.delete('/:postID', async (req, res) => {
    try {
        const removeEvent = await Event.remove({
            _id: req.params.postID
        });

        res.redirect('/event');
        // res.json(removeEvent);
    }
    catch (err) {
        res.json({
            message: err 
        });
    }
});

router.put('/:postID', async (req, res) => {
    try {
        const updateEvent = await Event.findByIdAndUpdate(req.params.postID, req.body, {
            new: true,
            runValidator: true

        });

        res.redirect('/event');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;