const router = require('express').Router();
const Log = require('../models/Logs');


router.get('/', async (req, res) => {
    try {
        let logs=logQuery.length;
        const { page = 1, limit = logs} = req.query;
        const log = await Log.find()
            .sort({ datePosted: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);
        console.log(log);
        res.render('logQuery', {
            logQuery: log,
            page_name: 'Logs',
            next: parseInt(page) + 1,
            prev: parseInt(page) - 1,
            isPaginate: false
        });


    }
    catch (err) {
        res.json({
            message: err
        });
    }

});

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






module.exports = router;