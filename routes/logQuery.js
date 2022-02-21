const router = require('express').Router();
const Log = require('../models/Logs');
const fs = require('fs');
const pdf = require('pdf-creator-node');
const path = require('path');
const options = require('../helpers/options');

router.get('/', async (req, res) => {
    try {
        const html = fs.readFileSync(path.join(__dirname, '../views/print.html'), 'utf-8');
        const filename = Math.random() + '_doc' + '.pdf';

        const document = {
            html: html,
            data: {
                products: "put your data here"
            },
            path: './docs/' + filename
        }
        pdf.create(document, options)
        .then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });

        const filepath = 'http://localhost:8080/docs/' + filename;
        // const { page = 1, limit =  } = req.query;
        const log = await Log.find({isAnswered:false})
            .sort({ datePosted: -1 });
        console.log(log);
        res.render('logQuery', {
            logQuery: log,
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