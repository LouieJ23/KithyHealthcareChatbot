const router = require('express').Router();
const Dep = require('../models/Departments');

router.get('/', async (req, res) => {
        try {
            const dep = await Dep.find();
            res.json(dep);
        }
        catch(err) {
            res.json({
                message: err
            });
        }
    // res.sendFile(__dirname + "/department.html");
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
    const dep = new Dep({
        depName = req.body.depSched,
        depDetail = req.body.depDetail,
        depSched = req.body.depSched
    });

    try {
        const savedDep = await dep.save();
        res.json(savedDep);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
    // console.log(req.body);
});

router.delete('/:postID', async (req, res) => {
    try {
        const removeDep = await Dep.remove({
            _id: req.params.post
        });
        res.json(removeDep);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

router.patch('/:postID', async (req, res) => {
    try {
        const updatedDep = await Dep.updateOne(
            {
                _id: req.params.postID,
            },
            {
                $set:
                {
                    title: req.body.title
                }
            }
        );

        res.json(updatedDep);
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;