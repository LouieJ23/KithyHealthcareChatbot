'use strict';
const router = require('express').Router();
require('dotenv/config');
let alert = require('alert');
const Log = require('../models/Logs');


router.get('/', async (req, res) => {
    try {

        const { page = 1, limit = 5 } = req.query;
        const log = await Log.find()
            .sort({ datePosted: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);
        console.log(log);
        res.render('admin', {
            logQuery: log,
            page_name: 'home',
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

router.post('/', async (req, res) => {
    let userName = req.body.username;
    let uName = process.env.USERNAME1;
    let uPassword = process.env.PASSWORD1;
    let userPassword = req.body.password;

    if (userName == uName && userPassword == uPassword) {
        res.render('admin', {
            page_name: 'home',
            isPaginate: false
        });
        alert("Login Successful.")
        return true;
    }
    else {
        res.sendFile(__dirname + "/login.html");
        alert("Login Failed.")
        return false;
    }
});




module.exports = router;