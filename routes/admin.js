'use strict';
const router = require('express').Router();
require('dotenv/config');
let alert = require('alert');

router.get('/', async (req, res) => {
    //     try {
    //         const event = await Event.find();
    //         res.json(event);
    //     }
    //     catch(err) {
    //         res.json({
    //             message: err
    //         });
    //     }
    res.sendFile(__dirname + "/admin.html");
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
    let userName = req.body.username;
    let uName = process.env.USERNAME1;
    let uPassword = process.env.PASSWORD1;
    let userPassword = req.body.password;


  
     if (userName == uName && userPassword == uPassword) {
        alert("Login Successful.");
        res.sendFile(__dirname + "/admin.html");
    }
  
     else {
        res.sendFile(__dirname + "/login.html");
    }

});


module.exports = router;