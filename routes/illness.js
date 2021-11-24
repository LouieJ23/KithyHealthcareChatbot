const router = require('express').Router();
const Illness = require('../models/Illness');

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
    res.sendFile(__dirname + "/illness.html");
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
    const illness = new Illness({
        title:req.body.title,
        detail:req.body.detail,
        symptoms:req.body.symptoms,
        treatment:req.body.treatment,
        prevention:req.body.prevention,
        datePosted:req.body.datePosted
    })
    try {
        const savedIllness = await illness.save();
        res.json(savedIllness);
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
        const removeIllness = await Illness.remove({
            _id: req.params.post
        });
        res.json(removeIllness);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

router.patch('/:postID', async (req, res) => {
    try {
        const updatedIllness = await Illness.updateOne(
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

        res.json(updatedIllness);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;