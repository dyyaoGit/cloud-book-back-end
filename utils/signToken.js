const jwt = require('jsonwebtoken');

module.exports = function (data, exp) {
    exp = exp || Math.round(Date.now() / 1000 + 60*60*24*7)
    return jwt.sign({
        data: data,
        exp
    }, 'dyyao')
}
