const db = require('./mySql/manager')
const redis = require('./redis/actions')

const getAll = async() => {
    const cache = await redis.setCache()
    const response = await db.getAll();
    return { "cache": cache, "getAll": response }
}
const insertOne = async(appointment) => {
    const response = await db.insertOne(appointment);
    console.log(response);
}
const getBestHairStyleByDate = async(times) => {
    const response = await db.getBestHairStyleByDate(times);
    return response

}


const deleteOne = async(appointment) => {
    const response = await db.deleteOne(appointment);
    console.log(response);
}
module.exports = {
    getAll,
    insertOne,
    deleteOne,
    getBestHairStyleByDate
};