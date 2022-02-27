'use strict';

const mongoose = require('mongoose');
const fs = require('fs');
const pdf = require('pdf-creator-node');
const path = require('path');

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
    const template = fs.readFileSync(path.join(__dirname, '../views/print.html'), 'utf-8');
    const options = {
        format: "A4",
        orientation: "portrait",
        border: "10mm"
    };

    const document = {
        html: template,
        data: {
            message: "Kithy Chatbot"
        },
        path:'./pdfs/newpdf.pdf'
    }
    pdf.create(document, options)
    .then(res => {
        console.log(res);
    }).catch(error => {
        console.log(error);
    });

    const filepath = './pdfs/newpdf.pdf';
    console.log(filepath);

    res.render('download', {
        path: filepath,
        page_name: 'download'
    });
}

module.exports = {
    processRequests,
    generatePdf
}
