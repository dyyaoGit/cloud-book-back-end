const {Router} = require('express');
const router = Router();
const {addSwiper, getSwiper, updateSwiper} = require('../controller/swiper');

router.post('/', addSwiper);
router.get('/', getSwiper);
router.patch('/:id', updateSwiper);

module.exports = router;
