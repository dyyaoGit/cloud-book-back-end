const title = require('../model/title');
const mongoose = require('mongoose');

async function getTitle (req, res, next) {
    try {
        const {bookId} = req.query;
        const data = await title.find({
            bookId: mongoose.Types.ObjectId(bookId)
        })
        res.json({
            code: 200,
            data
        })
    } catch(err) {

    }
}

module.exports = {
    getTitle
}
