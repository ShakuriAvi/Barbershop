const redis = require("redis")
const action = require("./commands")


const setCache = async() => {
    const client = redis.createClient()
    client.on("error", function(error) {
        console.log("Error encountered: ", error);
    })
    client.on("connect", () => {
        console.log("Redis connected");
    });
    const date = new Date().toLocaleDateString()
    let data = {};
    await action.updateValue(date, client).then(function(results) {
        data[date] = results[0];
        client.quit();
    });
    // await action.getValue(date, client).then(function(results) {
    //     data[date] = results[0];
    //     client.quit();
    // });
    return data
}


module.exports = {
    setCache
};