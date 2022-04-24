const router = require('express').Router();
const Appointment = require('../models/Appointment');

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


router.post('/', async (req, res) => {
    const appointment = new Appointment({
        category:req.body.category,
        docOption:req.body.docOption,
        consultType:req.body.consultType,
        dateOfConsultation:req.body.dateOfConsultation,
        timeOfConsultation:req.body.timeOfConsultation,
        patientName:req.body.patientName,
        sex:req.body.sex,
        address:req.body.address,
        email:req.body.email,
        reason:req.body.reason,
        datePosted:req.body.datePosted 
    });
    try {
        const savedAppointment = await appointment.save();
        res.redirect(301, '/');
        // res.json(savedAppointment);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
    // console.log(req.body);
});

module.exports = router;