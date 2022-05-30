const db = require('./mongoDB/actions')

const getAll = async() => {
    response = {}
    const data = await db.getAll()
    return data
}
module.exports = {
    getAll,

};