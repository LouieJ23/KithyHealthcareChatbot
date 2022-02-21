'use strict';

const mongoose = require('mongoose');
const fs = require('fs');
const pdf = require('pdf-creator-node');
const path = require('path');
const options = require('../helpers/options');
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

const generatePdf = async (req, res, next) => {
    const html = fs.readFileSync(path.join(__dirname, '../views/print.html'), 'utf-8');
    const filename = Math.random() + '_doc' + '.pdf';

    const document = {
        html: html,
        data: {
            products: "obj"
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

        res.render('logQuery', {
            path: filepath,
        });
}

module.exports = {
    processRequests,
    generatePdf
}
