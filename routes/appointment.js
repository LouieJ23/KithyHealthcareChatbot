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

router.get('/', async (req, res) => {
   try {
       const appointment = await Appointment.find()
       .sort({ datePosted: -1 })
       res.render('appointment', {
           appointments:appointment,
           page_name: 'appointment',
           isPaginate: false,
          
       });
   }
   catch(err) {
       res.json({
           message: err
       });
   }
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
        dateOfConsultation:req.body.dateOfConsultation,
        timeOfConsultation:req.body.timeOfConsultation,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        sex:req.body.sex,
        number:req.body.number,
        address:req.body.address,
        email:req.body.email,
        reason:req.body.reason,
        datePosted:req.body.datePosted 
    });
    try {
        const savedAppointment = await appointment.save();
        res.redirect(301, '/appointment');
        // res.json(savedAppointment);
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
        const appointment = await Appointment.findById(req.params.postID);
        res.render('appointment', {
            appointments: appointment,
            page_name: 'appointment',
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
        const removeAppointment = await Appointment.remove({
            _id: req.params.postID
        });
        res.redirect('/appointment');
        //res.json(removeAppointment);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});



router.put('/:postID', async (req, res) => {
    try {
        const updateAppointment = await Appointment.findByIdAndUpdate(req.params.postID, req.body, {
            new: true,
            runValidator: true
        });
        res.redirect('/appointment');
    }
    catch(err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;