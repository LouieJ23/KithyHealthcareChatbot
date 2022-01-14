const router = require('express').Router();
const CenterInfo = require('../models/CenterInfo');

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
        const centerInfo = await CenterInfo.find();
        res.render('centerInfo', {
            centerInfos: centerInfo
        });

        
    }
    catch(err) {
        res.json({
            message: err
        });
    }
});

router.get('/:centerInfoID', async (req, res) => {
    try {
        const centerInfo = await CenterInfo.findById(req.params.centerInfoID);
        res.render('centerInfo', {
            centerInfos: centerInfo
        });
    }
    catch(err) {
        res.json({
            message: err
        })
    }
});


router.post('/', async (req, res) => {
    const centerInfo = new CenterInfo({
       dateOfFouding:req.body.dateOfFouding, 
       publishedBy:req.body.publishedBy,
       location:req.body.location,
       phoneNumber:req.body.phoneNumber,
       email:req.body.email,
       mission:req.body.mission,
       vision:req.body.vision,
       datePosted:req.body.datePosted
    });

    try {
        const savedCenterInfo = await centerInfo.save();
        res.redirect(301, '/centerInfo');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
    // console.log(req.body);
});

router.delete('/:centerInfoID', async (req, res) => {
    try {
        const removeCenterInfo = await CenterInfo.remove({
            _id: req.params.centerInfoID
        });
        res.redirect('/centerInfo');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

router.put('/:centerInfoID', async (req, res) => {
    try {
        const updateCenterINfo = await CenterInfo.findByIdAndUpdate(req.params.centerInfoID, req.body, {
            new: true,
            runValidator: true
        });

        res.redirect('/centerInfo');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;