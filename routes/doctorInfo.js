const router = require('express').Router();
const DocInfo = require('../models/DoctorInfos');

router.get('/', async (req, res) => {
    // try {
    //     const doctor = await DocInfo.find();
    //     res.json(doctor);
    // }
    // catch(err) {
    //     res.json({
    //         message: err
    //     });
    // }
    res.sendFile(__dirname + "/doctorInfo.html");
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
    const doctor = new DocInfo({
        name:req.body.name,
        sex:req.body.sex,
        specialization:req.body.specialization,
        department:{
            type: String,
            require: true
        },
        contactInfo:{
            cellNumber:req.body.cellNumber,
            email:req.body.email
        },
        schedule:{
            Day:req.body.Day,
            Time:req.body.Time
        },
        datePosted: req.body.datePosted
    });

    try {
        const savedDocInfo = await doctor.save();
        res.json(savedDocInfo);
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
        const removeDocInfo = await DocInfo.remove({
            _id: req.params.post
        });
        res.json(removeDocInfo);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

router.patch('/:postID', async (req, res) => {
    try {
        const updatedDocInfo = await DocInfo.updateOne(
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

        res.json(updatedDocInfo);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;