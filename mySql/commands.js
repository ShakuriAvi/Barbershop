const conn = require("./connection.js")

async function getAll() {
    const DB = await conn.connectDB();
    const _query = "select * from hairstyle"
    try {
        const result = await DB.request()
            .query(_query);

        return result.recordset;
    } catch (err) {
        console.log('Error querying database', err);

        return err;
    } finally {
        DB.close();
    }
}
module.exports = {
    getAll,

};