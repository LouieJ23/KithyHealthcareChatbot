const router = require('express').Router();
const Appointment = require('../models/Appointment');

router.get('/', async (req, res) => {
    // try {
    //     const event = await Appointment.find();
    //     res.json(appointment);
    // }
    // catch(err) {
    //     res.json({
    //         message: err
    //     });
    // }
    res.sendFile(__dirname + "/appointment.html");
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
    const appointment = new Appointment({
        category:req.body.category,
        docOption:req.body.docOption,
        consultType:req.body.consultType,
        dateTime:req.body.dateTime,
        patientName:req.body.patientName,
        sex:req.body.sex,
        address:req.body.address,
        email:req.body.email,
        reason:req.body.reason,
        
    })
    try {
        const savedAppointment = await appointment.save();
        res.json(savedAppointment);
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
        const removeAppointment = await Appointment.remove({
            _id: req.params.post
        });
        res.json(removeAppointment);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

router.patch('/:postID', async (req, res) => {
    try {
        const updatedAppointment = await Appointment.updateOne(
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

        res.json(updatedAppointment);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;