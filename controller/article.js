const articleModel = require('../model/article');
const mongoose = require('mongoose');

async function getArticleById (req, res, next) {
    try {
        const {id} = req.params;

        const data = await articleModel.find({
            titleId: mongoose.Types.ObjectId(id)
        })
        res.json({
            code: 200,
            data
        })
    } catch(err){
        next(err)
    }
}

module.exports = {
    getArticleById
}
