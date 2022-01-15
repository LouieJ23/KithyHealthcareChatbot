const router = require('express').Router();
const Event = require('../models/Events');

router.use((req, res, next) => {
    if(req.query._method == 'DELETE') {
        req.method = 'DELETE';
        req.url = req.path
    }

if(req.query._method == 'PUT') {
    req.method = 'PUT';
    req.url = req.path
}
    next();
});



router.get('/', async (req, res) => {
    try { 
        const {page = 1, limit = 2} = req.query;
        const event = await Event.find()
        .limit(limit * 1)
       .skip((page - 1) * limit);
        res.render('event', {
            events: event,
            page_name: 'event',
            next: parseInt(page) + 1,
           prev: parseInt(page) - 1,
           isPaginate: true
        });
        
    }
    catch(err) {
        res.json({
            message: err
        });
    }

    // try {
    //     const events = await Event.find();
    //     res.json(events);
    // }
    // catch(err) {
    //     res.json({
    //         message: err
    //     })
    // }
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
        startDateTime: req.body.startDateTime,
        endDateTime: req.body.endDateTime,
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
    catch(err) {
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

// router.patch('/:postID', async (req, res) => {
//     try {
//         const updatedEvent = await Event.updateOne({
//                 _id: req.params.postID
//             }, 
//             {
//                 eventTitle: req.body.eventTitle,
//                 eventLocation: req.body.eventLocation,
//                 eventDetails: req.body.eventDetails,
//                 startDateTime: req.body.startDateTime,
//                 endDateTime: req.body.endDateTime,
//                 eventRequire: req.body.eventRequire,
//                 eventProcess: req.body.eventProcess,
//                 eventParticipant: req.body.eventParticipant,
//                 datePosted: req.body.datePosted
//             });

//             res.redirect('/event');
//     }
//     catch (err) {
//         res.json({
//             message: err
//         });
//     }
// });

router.put('/:postID', async (req, res) => {
    try {
        const updateEvent = await Event.findByIdAndUpdate(req.params.postID, req.body, {
            new: true,
            runValidator: true
            
        });

        res.redirect('/event');
    }
    catch(err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;