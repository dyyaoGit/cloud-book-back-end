const {Router} = require('express');
const router = Router();
const {sendCode} = require('../controller/smsCode');

router.post('/', sendCode)

module.exports = router;
