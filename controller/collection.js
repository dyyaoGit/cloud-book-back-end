const collectionModel = require('../model/collection');
const mongoose = require('mongoose');

async function addCollection (req, res, next) {
    try {
        const userId = req.user.userId;
        const {bookId} = req.body;

        const collection = await collectionModel.findOne({
            book: mongoose.Types.ObjectId(bookId),
            user: mongoose.Types.ObjectId(userId)
        })
        if(collection) {
            res.json({
                code: 400,
                msg: '对不起，您已经添加过该收藏'
            })
        } else {
            const collection = await collectionModel.create({
                book: mongoose.Types.ObjectId(bookId),
                user: mongoose.Types.ObjectId(userId)
            })
            res.json({
                code: 200,
                msg: '添加收藏成功'
            })
        }
    } catch(err) {
        next(err)
    }
}

async function getCollection (req, res, next) {
    try {
        const id = req.user.userId;
        let {pn = 1, size = 1} = req.query;
        pn = Number(pn);
        size = Number(size);

        const data = await collectionModel
            .find({
                user: mongoose.Types.ObjectId(id),
                status: 1
            })
            .populate({
                path: 'book'
            })
            .sort({_id: -1})
            .limit(size)
            .skip((pn-1)*size)

        res.json({
            code: 200,
            data
        })

    } catch(err) {
        next(err)
    }
}

async function deleteCollection (req, res, next) {
    try {
        const id = req.params.id;

        const collection = await collectionModel.findById(
            mongoose.Types.ObjectId(id)
        )
        if(collection){
            await collection.set({status: 0});
            await collection.save();
            res.json({
                code: 200,
                msg: '删除收藏成功'
            })
        } else {
            res.json({
                code: 400,
                msg: '该收藏已删除'
            })
        }
    } catch(err) {
        next(err)
    }
}

module.exports = {
    addCollection,
    getCollection,
    deleteCollection
}
