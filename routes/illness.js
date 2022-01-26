const router = require('express').Router();
const Illness = require('../models/Illness');

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
       const {page = 1, limit = 4} = req.query;
        const illness = await Illness.find()
        .limit(limit * 1)
       .skip((page - 1) * limit);

        res.render('illness', {
            illnesses: illness,
            page_name: 'mildIllness',
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

router.get('/:illnessID', async (req, res) => {
    try {
        const illness = await Illness.findById(req.params.illnessID);
        res.render('illness', {
            illnesses: illness,
            page_name: 'mildIllness',
            isPaginate: false
        });
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});


router.post('/', async (req, res) => {
    const illness = new Illness({
        title:req.body.title,
        detail:req.body.detail,
        symptoms:req.body.symptoms,
        treatment:req.body.treatment,
        prevention:req.body.prevention,
        datePosted:req.body.datePosted
    })
    try {
        const savedIllness = await illness.save();
        res.redirect(301, '/mildIllness');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
    // console.log(req.body);
});

router.delete('/:illnessID', async (req, res) => {
    try {
        const removeIllness = await Illness.remove({
            _id: req.params.illnessID
        });
        res.redirect('/mildIllness');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

router.put('/:illnessID', async (req, res) => {
    try {
        const updateIllness = await Illness.findByIdAndUpdate(req.params.illnessID, req.body, {
            new: true,
            runValidator: true
        });

        res.redirect('/mildIllness');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;