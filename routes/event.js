const router = require('express').Router();
const Event = require('../models/Event');

router.get('/', async (req, res) => {
    // try {
    //     const posts = await Post.find();
    //     res.json(posts);
    // }
    // catch(err) {
    //     res.json({
    //         message: err
    //     });
    // }
    res.sendFile(__dirname + "/event.html");
});

router.get('/:postID', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID);
        res.json(post);
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
        const removePost = await Post.remove({
            _id: req.params.post
        });
        res.json(removePost);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

router.patch('/:postID', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
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

        res.json(updatedPost);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;