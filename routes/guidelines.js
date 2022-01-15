const router = require('express').Router();
const Guidelines = require('../models/Guidelines');

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
        const guideline = await Guidelines.find()
        .limit(limit * 1)
       .skip((page - 1) * limit);
        res.render('guidelines', {
            guidelines: guideline,
            page_name: 'guideline',
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
    res.sendFile(__dirname + "/guidelines.html");
});

router.get('/:guidelinesID', async (req, res) => {
    try {
        const guideline = await Guidelines.findById(req.params.guidelinesID);
        res.render('guidelines', {
            guidelines: guideline,
            page_name: 'guideline',
            isPaginate: false
        });

        console.log(guideline);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});


router.post('/', async (req, res) => {
    const guide = new Guidelines({
        actNo:req.body.actNo,
        title:req.body.title,
        detail:req.body.detail,
        datePosted:req.body.datePosted
    });

    try {
        const savedGuidelines = await guide.save();
        res.redirect(301, '/guidelines');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
    // console.log(req.body);
});

router.delete('/:guidelineID', async (req, res) => {
    try {
        const removeGuidelines = await Guidelines.remove({
            _id: req.params.guidelineID
        });
        res.redirect('/guidelines');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

router.put('/:guidelineID', async (req, res) => {
    try {
        const updateGuideline = await Guidelines.findByIdAndUpdate(req.params.guidelineID, req.body, {
            new: true,
            runValidator: true
        });

        res.redirect('/guidelines');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;