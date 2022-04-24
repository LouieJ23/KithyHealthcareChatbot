const router = require('express').Router();
const Log = require('../models/QueryLog');
const fs = require('fs');
const pdf = require('pdf-creator-node');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '../views/print.html'), 'utf-8');
const options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm"

};

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

// router.get('/:postID', async (req, res) => {
//     try {
//         const queryLog = await Log.findById(req.params.postID);
//         res.render('queryLog', {
//             queryLogs: queryLog,
//             page_name: 'Logs',
//             isPaginate: false
//         });
//     }
//     catch (err) {
//         res.json({
//             message: err
//         })
//     }
// });

router.get('/:postID', async (req, res) => {
    try {
        // const distinctLogs = await Log.distinct("query");
        const distinctLogs = await LogQuery.find({"query": "Kent Levi A. Bonifacio"}) ;

        const countedLogs = [];
        for (let i = 0; i < distinctLogs.length; i++) {
            let log = distinctLogs[i];
            const queryLog = await log.findById(req.params.postID);
      
        countedLogs.push({
            distinct: log
        });

        res.render('queryLog', {
            queryLog: queryLog,
            page_name: 'Logs',
            isPaginate: false
        });

        }
    }
    catch (err) {
        res.json({
            message: err
        })
    }
})



router.get('/', async (req, res) => {
    try {
        const distinctLogs = await Log.distinct("query");
        const countedLogs = [];
        for (let i = 0; i < distinctLogs.length; i++) {
            let log = distinctLogs[i];
            const frequentLogs = await Log.count({ query: log });

            countedLogs.push({
                frequent: frequentLogs,
                distinct: log
            });
        }

        const obj = {
            inputLogs: countedLogs
        };

        const filename = 'KithyChatbotLogs' + Math.random() + '.pdf';
        const document = {
            html: template,
            data: {
                message: "Kithy Healthcare Chatbot Logs",
                logs: obj
            },
            path: './pdfs/' + filename
        }
        pdf.create(document, options)
            .then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error);
            });

        const filepath = 'http://localhost:8080/pdfs/' + filename;


        res.render('queryLog', {
            queryLog: countedLogs.sort((a, b) => a.frequent > b.frequent ? -1 : 1),
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



router.delete('/:postQuery', async (req, res) => {
    try {
        await Log.deleteMany({"query": req.params.postQuery}) ;

        res.redirect('/queryLog');

    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

router.put('/:postID', async (req, res) => {
    try {
        const updateLogs = await Log.findByIdAndUpdate(req.params.postID, req.body, {
            new: true,
            runValidator: true

        });

        res.redirect('/queryLog');
    }
    catch (err) {
        res.json({
            message: err
        });
    }
});


module.exports = router;