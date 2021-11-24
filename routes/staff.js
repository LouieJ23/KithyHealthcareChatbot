const router = require('express').Router();
const Staff = require('../models/Staffs');

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
    res.sendFile(__dirname + "/staff.html");
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
    const staff = new Staff({
        name:req.body.name,
        sex:req.body.sex,
        career:req.body.career,
        specialization:req.body.specialization,
        department:req.body.department,
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
        const savedStaff = await staff.save();
        res.json(savedStaff);
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
        const removeStaff = await Staff.remove({
            _id: req.params.post
        });
        res.json(removeStaff);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

router.patch('/:postID', async (req, res) => {
    try {
        const updatedStaff = await Staff.updateOne(
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

        res.json(updatedStaff);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;