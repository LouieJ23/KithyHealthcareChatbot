const router = require('express').Router();
const Guidelines = require('../models/Guidelines');

router.get('/', async (req, res) => {
    try {
        const gui = await Guidelines.find();
        res.json(gui);
    }
    catch(err) {
        res.json({
            message: err
        });
    }
    // res.sendFile(__dirname + "/guidelines.html");
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
    const guide = new Guidelines({
        actNo:req.body.actNo,
        title:req.body.title,
        detail:req.body.detail,
        datePosted:req.body.datePosted
    });

    try {
        const savedGuidelines = await guide.save();
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
        const removeGuidelines = await Guidelines.remove({
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