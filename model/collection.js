const mongoose = require('mongoose');

const collection = new mongoose.Schema({
    book: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'book'
    },
    status: {
        type: Number,
        default: 1
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    index: {
        type: Number,
        default: 1
    }
}, {versionKey: false, timestamps: {
    createdAt: 'createTime',
    updatedAt: 'updateTime'
}})

module.exports = mongoose.model('collection', collection);
