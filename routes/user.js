const {Router} = require('express');
const router = Router();
const {register} = require('../controller/user');

router.post('/register', register);


module.exports = router;
