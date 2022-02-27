'use strict';

const mongoose = require('mongoose');

const _Event = require('./intents/EventIntent');
const _HealthCenter = require('./intents/HealthCenter');
const _Illness = require('./intents/IllnessIntent');
const _Hotline = require('./intents/Hotlines');
const _Department = require('./intents/Department');
const _DefaultWelcomeIntent  = require('./intents/DefaultWelcomeIntent');

const StaffInfo = require('../models/Staffs');
const Guidelines = require('../models/Guidelines');
const CenterInfo = require('../models/CenterInfo');
const MildIllness = require('../models/Illness')
const Appointment = require('../models/Appointment');
const Admin = require('../routes/admin');

const processRequests = (req, res) => {
    _Event(req, res);
    _HealthCenter(req, res);
    _Illness(req, res);
    _Hotline(req, res);
    _Department(req, res);
    _DefaultWelcomeIntent(req, res);
};

module.exports = {
    processRequests,
}
