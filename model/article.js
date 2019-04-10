const mongoose = require('mongoose')

const article = new mongoose.Schema({
    bookId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'book'
    },
    content: String,
    index: {
        type: Number,
        default: 1
    },
    titleId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'title'
    }
}, {versionKey: false, timestamp: {createdAt: 'createTime', updatedAt: 'updateTime'}})

module.exports = mongoose.model('article', article)
