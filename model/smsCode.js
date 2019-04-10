const mongoose = require('mongoose');

const smsCode = new mongoose.Schema({
    phone: String,
    code: String
}, {versionKey: false, timestamp: {createdAt: 'createTime',
        updatedAt: 'updateTime'}})

module.exports = mongoose.model('smsCode', smsCode);
