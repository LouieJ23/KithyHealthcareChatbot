const router = require('express').Router();
const Hotline = require('../models/Hotline');

router.use((req, res, next) => {
    if (req.query._method == 'DELETE') {
        req.method = 'DELETE';
        req.url = req.path
    }

    if (req.query._method == 'PUT') {
        req.method = 'PUT';
        req.url = req.path
    }
    next();
});



router.get('/', async (req, res) => {
    try {
        const { page = 1, limit = 4 } = req.query;
        const hotline = await Hotline.find()
            .sort({ datePosted: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);
        res.render('hotline', {
            hotlines: hotline,
            page_name: 'hotline',
            next: parseInt(page) + 1,
            prev: parseInt(page) - 1,
            isPaginate: true
        })


    }
    catch (err) {
        res.json({
            message: err
        });
    }

    // try {
    //     const events = await Event.find();
    //     res.json(events);
    // }
    // catch(err) {
    //     res.json({
    //         message: err
    //     })
    // }
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
    const hotline = new Hotline({
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
        facebookPage: req.body.facebookPage,
        datePosted: req.body.datePosted
    });

    try {
        const savedHotline = await hotline.save();
        res.redirect(301, '/hotline');

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
        const hotline = await Hotline.findById(req.params.postID);
        res.render('hotline', {
            hotlines: hotline,
            page_name: 'hotline',
            isPaginate: false
        });
    }
    catch (err) {
        res.json({
            message: err
        })
    }
})

router.delete('/:postID', async (req, res) => {
    try {
        const removeHotline = await Hotline.remove({
            _id: req.params.postID
        });

        res.redirect('/hotline');
        // res.json(removeEvent);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

router.put('/:postID', async (req, res) => {
    try {
        const updateHotline = await Hotline.findByIdAndUpdate(req.params.postID, req.body, {
            new: true,
            runValidator: true

        });

        res.redirect('/hotline');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;