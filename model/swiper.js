const mongoose = require('mongoose');

// book: {index: 1, looknums: 164, startsnums: 0, like_this_users: [], _id: "5b6ca197feeb050664fe88ba",…}
// img: "http://pbl.yaojunrong.com/ES6.jpg"
// index: 1000
// sort: 1
// status: 1
// title: "ECMAScript6"
// _id: "5ba2fbdcfab76d247e6bb602"

const swiper = new mongoose.Schema({
    book: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'book'
    },
    index: {
        type: Number,
        default: 1
    },
    status: {
        type: Number,
        default: 1
    },
    title: String,
    img: String
}, {versionKey: false, timestamps: {createdAt: 'createTime', updatedAt: 'updateTime'}})

module.exports = mongoose.model('swiper', swiper)
