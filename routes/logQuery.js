const router = require('express').Router();
const Log = require('../models/Logs');
const fs = require('fs');
const pdf = require('pdf-creator-node');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '../views/print.html'), 'utf-8');
const options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm"
};


router.get('/', async (req, res) => {
    try {
        const filename = 'KithyChatbotLogs'+Math.random()+'.pdf';
        const document = {
            html: template,
            data: {
                message: "Kithy Chatbot Logs"
            },
            path:'./pdfs/'+filename
        }
        pdf.create(document, options)
        .then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });

        const filepath = 'http://localhost:8080/pdfs/'+filename;
        const { page = 1, limit = 5 } = req.query;
        const log = await Log.find({isAnswered:false})
            .sort({ datePosted: -1 });
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