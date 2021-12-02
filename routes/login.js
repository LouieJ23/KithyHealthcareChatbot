const router = require('express').Router();
// const Event = require('../models/Events');

router.get('/', async (req, res) => {

    res.sendFile(__dirname + "/login.html");
});


module.exports = router;