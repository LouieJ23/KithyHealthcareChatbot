const router = require('express').Router();
const Log= require('../models/Logs');
const fs = require('fs');

router.get('/', async (req, res) => {
    try {
        

        res.render('logQuery', {
            logQuery: countedLogs.sort((a, b) => a.frequent > b.frequent ? -1 : 1),
            page_name: 'Logs',
            path: filepath,
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






module.exports = router;