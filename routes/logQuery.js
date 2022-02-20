const router = require('express').Router();
const Log = require('../models/Logs');

router.get('/', async (req, res) => {
    try {
        
        // const { page = 1, limit =  } = req.query;
        const log = await Log.find({isAnswered:false})
            .sort({ datePosted: -1 });
        console.log(log);
        res.render('logQuery', {
            logQuery: log,
            page_name: 'Logs',
            
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