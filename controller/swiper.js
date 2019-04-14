const swiperModel = require('../model/swiper');
const mongoose = require('mongoose');

async function addSwiper (req, res, next) {
    try {
        const {title, img, bookId, index = 1} = req.body;
        const swiper = await swiperModel.create({
            title,
            img,
            book: mongoose.Types.ObjectId(bookId),
            index
        })
        res.json({
            code: 200,
            msg: '添加轮播图成功'
        })
    } catch(err){
        next(err)
    }
}

async function getSwiper (req, res, next) {
    try {
        let {pn = 1, size = 1} = req.query;
        pn = Number(pn);
        size = Number(size);

        const data = await swiperModel
            .find({status: 1})
            .populate({
                path: 'book'
            })
            .sort({index: -1, _id: -1})
            .skip((pn - 1) * size)
            .limit(size)

        res.json({
            code: 200,
            data
        })
    } catch (err) {

    }
}

async function updateSwiper (req, res, next) {
    try {
        const id = req.params.id; // 取得轮播图id
        const {
            title,
            bookId,
            status,
            index
        } = req.body;
        const updateData = await swiperModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            title,
            book: mongoose.Types.ObjectId(bookId),
            status,
            index
        })

        res.json({
            code: 200,
            msg: '更新轮播图成功',
            data: updateData
        })
    } catch(err) {
        next(err)
    }
}


module.exports = {
    addSwiper,
    getSwiper,
    updateSwiper
}
