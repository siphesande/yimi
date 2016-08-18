
const request = require('request');

var USER = 'MsEmma';
var KEY = 'A48iCfXkIEkbVs8QJC1Kp2ayGraieSbjqyLf0hHqZjEDIx4KAU7RLM';

module.exports = function(url, modelId, cb) {
    request.post({
            url: 'https://klws.keylemon.com/api/recognize/',
            form: {
                user: USER,
                key: KEY,
                urls: url,
                models: modelId
            }
        },
        function(err, httpResponse, results) {

            if (err) {
                return cb(err);
            }
            cb(null, results)
        })
}
