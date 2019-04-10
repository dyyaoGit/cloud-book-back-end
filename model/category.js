const mongoose = require('mongoose');

const category = new mongoose.Schema({
    title: String,
    icon: String,
    books: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'book'
    }],
    index: {
        type: Number,
        default: 1
    },
    status: {
        type: Number,
        default: 1
    }
}, {versionKey: false, timestamp: {createdAt: 'createTime', updatedAt: 'updateTime'}})

module.exports = mongoose.model('category', category)
