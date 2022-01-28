const router = require('express').Router();
const Log = require('../models/Logs');

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
        
        const {page = 1, limit = 500} = req.query;
        const log = await Log.find()
        .sort({ datePosted: -1 })
        .limit(limit * 1)
       .skip((page - 1) * limit);
        res.render('logQuery', {
            logQuery: log,
            page_name: 'log',
            next: parseInt(page) + 1,
            prev: parseInt(page) - 1,
            isPaginate: true
        })
      
        
    }
    catch(err) {
        res.json({
            message: err
        });
    }

});


module.exports = router;