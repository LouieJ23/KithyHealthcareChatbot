'use strict';

// connection to mongoDB
const mongoose = require('mongoose');

// declaring variable for the functions for every intents
const _Event = require('./intents/EventIntent');
const _HealthCenter = require('./intents/HealthCenter');
const _Illness = require('./intents/IllnessIntent');
const _Hotline = require('./intents/Hotlines');
const _Department = require('./intents/Department');
const _DefaultWelcomeIntent = require('./intents/DefaultWelcomeIntent');
const _Guideline = require('./intents/Guidelines');
const _Staff = require('./intents/StaffIntent');

// calling each functions
const processRequests = (req, res) => {
    _Event(req, res);
    _HealthCenter(req, res);
    _Illness(req, res);
    _Hotline(req, res);
    _Department(req, res);
    _DefaultWelcomeIntent(req, res);
    _Guideline(req, res);
    _Staff(req, res);
};

module.exports = {
    processRequests,
}
