const router = require('express').Router();
// const Departments = require('../models/Departments');
const Department = require('../models/Departments');

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
       const {page = 1, limit = 2} = req.query;
        const department = await Department.find()
        .limit(limit * 1)
       .skip((page - 1) * limit);

        res.render('department', {
            departments: department,
            page_name: 'department',
            next: parseInt(page) + 1,
            prev: parseInt(page) - 1,
            isPaginate: true
        });

        
    }
    catch(err) {
        res.json({
            message: err
        });
    }
});

router.get('/:departmentID', async (req, res) => {
    try {
        const department = await Department.findById(req.params.departmentID);
        res.render('department', {
            departments: department,
            page_name: 'department',
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
    const department = new Department({
        depName: req.body.depName,
        depDetail: req.body.depDetail,
        depSched: req.body.depSched
    });

    try {
        const savedDep = await department.save();
        res.redirect(301, '/department');

    }
    catch (err) {
        res.json({
            message: err
        });
    }
    // console.log(req.body);
});

router.delete('/:departmentID', async (req, res) => {
    try {
        const removeDepartment = await Department.remove({
            _id: req.params.departmentID
        });
        res.redirect('/department');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

router.put('/:departmentID', async (req, res) => {
    try {
        const updateDepartment = await Department.findByIdAndUpdate(req.params.departmentID, req.body, {
            new: true,
            runValidator: true
        });

        res.redirect('/department');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});


module.exports = router;