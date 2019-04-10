const mongoose = require('mongoose');

const user = new mongoose.Schema({
    avatar: {
        type: String,
        default: 'http://image.yaojunrong.com/zhenxiang.jpg'
    },
    phone: {
        type: Number,
        unique: true
    },
    password: String,
    nickname: String
}, {versionKey: false, timestamp: {createdAt: 'createTime',
        updatedAt: 'updateTime'}})

module.exports = mongoose.model('user', user)
