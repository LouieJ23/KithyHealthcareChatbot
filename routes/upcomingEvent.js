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
        const comingEvent = await Event.find({ startDate: { $gt: currentDate } }).sort({ startDate: -1 });
        const upcomingEvent = await Event.find()
            .sort({ datePosted: -1 })
      
        res.render('upcomingEvent', {
            upcomingEvents: upcomingEvent,
            eventComing: comingEvent,
            page_name: 'upcomingEvent',
            isPaginate: true
        })


    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

router.post('/', async (req, res) => {
    const upcomingEvent = new Event({
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
        const comingEvent = await Event.find({ startDate: { $gt: currentDate } }).sort({ datePosted: -1 });
        const savedEvent = await upcomingEvent.save();
        res.redirect(301, '/upcomingEvent',{
            upcomingEvents: savedEvent,
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
        const comingEvent = await Event.find({ startDate: { $gt: currentDate } }).sort({ datePosted: -1 });
        const upcomingEvent = await Event.findById(req.params.postID);
        res.render('upcomingEvent', {
            upcomingEvents: upcomingEvent,
            eventComing: comingEvent,
            page_name: 'upcomingEvent',
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

        res.redirect('/upcomingEvent');
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

        res.redirect('/upcomingEvent');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;