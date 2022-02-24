'use strict';

async function _DefaultWelcomeIntent(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    const value = req.body.queryResult.queryText;

     if (intent_name == "Default Welcome Intent") {
        const log3 = new LogQuery({
            query: value,
            isAnswered: true
        });
        console.log(value);
    }
}
module.exports = _DefaultWelcomeIntent;