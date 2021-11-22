const router = require('express').Router();
const Guidelines = require('../models/Guidelines');

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
    res.sendFile(__dirname + "/guidelines.html");
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
    const guidelines = new Guidelines({
        actNo:req.body.actNo,
        title:req.body.title,
        detail:req.body.detail,
        datePosted:req.body.datePosted
    });

    try {
        const savedGuidelines = await guidelines.save();
        res.json(savedGuidelines);
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
        const removeGuidelinesEvent = await Guidelines.remove({
            _id: req.params.post
        });
        res.json(removeGuidelines);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

router.patch('/:postID', async (req, res) => {
    try {
        const updatedGuidelines = await Guidelines.updateOne(
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

        res.json(updatedGuidelines);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;