const router = require('express').Router();
const Staff = require('../models/Staffs');

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
       const {page = 1, limit = 2} = req.query;
        const staff = await Staff.find()
        .limit(limit * 1)
       .skip((page - 1) * limit);

        res.render('staff', {
            staffs: staff,
            page_name: 'staff',
            next: parseInt(page) + 1,
           prev: parseInt(page) - 1,
           isPaginate: true
        });

        
    }
    catch(err) {
        res.json({
            message: err
        });
    }
});

router.get('/:staffID', async (req, res) => {
    try {
        const staff = await Staff.findById(req.params.staffID);
        res.render('staff', {
            staffs: staff,
            page_name: 'staff',
            isPaginate: false
        });
    }
    catch(err) {
        res.json({
            message: err
        })
    }
});


router.post('/', async (req, res) => {
    const staff = new Staff({
        name:req.body.name,
        sex:req.body.sex,
        career:req.body.career,
        specialization:req.body.specialization,
        department:req.body.department,
        datePosted: req.body.datePosted
    });

    try {
        const savedStaff = await staff.save();
        res.redirect(301, '/staffInfo');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
    // console.log(req.body);
});

router.delete('/:staffID', async (req, res) => {
    try {
        const removeStaff = await Staff.remove({
            _id: req.params.staffID
        });
        res.redirect('/staffInfo');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

router.put('/:staffID', async (req, res) => {
    try {
        const updateStaff = await Staff.findByIdAndUpdate(req.params.staffID, req.body, {
            new: true,
            runValidator: true
        });

        res.redirect('/staffInfo');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;