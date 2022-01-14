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

router.get('/:postID', async (req, res) => {
    try {
        const centerInfo = await CenterInfo.findById(req.params.postID);
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
       dateOfFounding:req.body.dateOfFounding, 
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

router.delete('/:postID', async (req, res) => {
    try {
        const removeCenterInfo = await CenterInfo.remove({
            _id: req.params.postID
        });
        res.redirect('/centerInfo');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

router.put('/:postID', async (req, res) => {
    try {
        const updateCenterINfo = await CenterInfo.findByIdAndUpdate(req.params.postID, req.body, {
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