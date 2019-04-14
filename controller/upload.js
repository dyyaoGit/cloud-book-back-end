const uploadUtil = require('../utils/uploadUtil');

async function upload (req, res, next) {
    try {
        res.json({
            code: 200,
            data: {
                token: uploadUtil()
            }
        })
    } catch(err) {
        next(err)
    }
}

module.exports = {
    upload
}
