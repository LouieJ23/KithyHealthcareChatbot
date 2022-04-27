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
       
        const currentDate = new Date(Date.now());
        const comingEvent = await Event.find({ startDate: { $lt: currentDate } }).sort({ startDate: -1 });
        const previousEvent = await Event.find().sort({ datePosted: -1 })
           
        res.render('previousEvent', {
            previousEvents: previousEvent,
            eventComing: comingEvent,
            page_name: 'previousEvent',
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
    const previousEvent = new Event({
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
        const currentDate = new Date(Date.now());
        const comingEvent = await Event.find({ startDate: { $lte: currentDate } }).sort({ datePosted: -1 });
        const savedEvent = await previousEvent.save();
        res.redirect(301, '/previousEvent',{
            previousEvents: savedEvent,
            eventComing: comingEvent,
        });

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
        const currentDate = new Date(Date.now());
        const comingEvent = await Event.find({ startDate: { $lte: currentDate } }).sort({ datePosted: -1 });
        const previousEvent = await Event.findById(req.params.postID);
        res.render('previousEvent', {
            previousEvents: previousEvent,
            eventComing: comingEvent,
            page_name: 'previousEvent',
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
        const removeEvent = await Event.findByIdAndDelete ({
            _id: req.params.postID
        });

        res.redirect('/previousEvent');
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

        res.redirect('/previousEvent');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;