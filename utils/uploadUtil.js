const qiniu = require('qiniu');

var accessKey = 'hiaSMM1QqBT-0Q0KywiDrpp_tXbgBz8p1mFXkoil';
var secretKey = 'A4to1dxJHlKuQ_HuoKWhdf34-J3B_dYzt4eIT5tl';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

module.exports = function () {
    var options = {
        scope: 'cloud-book', // 空间名
        returnBody:  '{"key": $(key), "hash": $(etag), "url": "http://pptvjwume.bkt.clouddn.com/$(key)"}',
        expires: 3600,
    };
    var putPolicy = new qiniu.rs.PutPolicy(options);
    var uploadToken = putPolicy.uploadToken(mac);
    return uploadToken
}

