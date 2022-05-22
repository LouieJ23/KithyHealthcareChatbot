'use strict';

const mongoose = require('mongoose');
const DefLogQuery = require('../../models/QueryLog');

async function _DefaultWelcomeIntent(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    const value = req.body.queryResult.queryText;

    if (value == "Default Welcome Intent") {
        
        const log = new DefLogQuery({
            query: value,
            isAnswered: true
        });
        console.log(value);
    }
   
}
module.exports = _DefaultWelcomeIntent; 