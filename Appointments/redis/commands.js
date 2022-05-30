const redis = require("redis")
const bluebird = require("bluebird");
bluebird.promisifyAll(redis.RedisClient.prototype);

async function getValue(key, client) {
    var promise = client.getAsync(key).then(function(value) {
        if (value == null) {
            return 0
        } else {
            const num = parseInt(value) + 1
            return num
        }
    });
    return Promise.all([promise]);


}
async function updateValue(key, client) {
    var promise = client.getAsync(key).then(function(value) {
        if (value == null) {
            client.set(key, 1)
            return 1
        } else {
            const num = parseInt(value) + 1
            client.set(key, num)
            return num
        }
    });
    return Promise.all([promise]);
}


module.exports = {
    getValue,
    updateValue
};