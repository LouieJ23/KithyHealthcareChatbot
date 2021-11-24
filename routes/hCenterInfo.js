const router = require('express').Router();
const CenterInfo = require('../models/HCenterInfo');

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
    res.sendFile(__dirname + "/hCenterInfo.html");
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
    const info = new CenterInfo({
       builtDate:req.body.builtDate,
       builtBy:req.body.builtBy,
       address:req.body.address,
       contactInfo:{
           cellNumber:req.body.cellNumber,
           email:req.body.email
       },
       mission:req.body.mission,
       vision:req.body.vision,
       datePosted:req.body.datePosted
    })

    try {
        const savedCenterInfo = await info.save();
        res.json(savedCenterInfo);
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
        const removeCenterInfo = await CenterInfo.remove({
            _id: req.params.post
        });
        res.json(removeCenterInfo);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

router.patch('/:postID', async (req, res) => {
    try {
        const updatedCenterInfo = await CenterInfo.updateOne(
            {
                _id: req.params.postID,
            },
            {
                $set:
                {
                    title: req.body.buitlDate
                }
            }
        );

        res.json(updatedCenterInfo);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;