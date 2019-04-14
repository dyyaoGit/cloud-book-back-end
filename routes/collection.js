const {Router} = require('express');
const router = Router();
const {
    addCollection,
    getCollection,
    deleteCollection
} = require('../controller/collection');
const auth = require('../controller/auth');

router.post('/', auth, addCollection);
router.get('/', auth, getCollection);
router.delete('/:id', auth, deleteCollection);

module.exports = router;
