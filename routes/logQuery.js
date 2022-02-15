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






module.exports = router;