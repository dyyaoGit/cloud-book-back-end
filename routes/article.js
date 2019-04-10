const {Router} = require('express');
const router = Router();
const {getArticleById} = require('../controller/article');

router.get('/:id', getArticleById)

module.exports = router;
