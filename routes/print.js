const router = require('express').Router();
const Log = require('../models/QueryLog');

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


        
        res.render('print', {
            queryLog: countedLogs,
            page_name: 'Print',
            isPaginate: false
        });


    }
    catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;