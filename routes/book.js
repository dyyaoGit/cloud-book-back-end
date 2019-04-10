const {Router} = require('express');
const router = Router();
const {getBook,
    getBookById,
    getAllBook
} = require('../controller/book');

router.post('/', getBook);
router.get('/allBook', getAllBook);
router.get('/:id', getBookById);

module.exports = router;
