const settings = require("../settings.json")
const sqlDb = require("mssql")

async function connectDB() {
    const config = settings.config_sql
    const pool = new sqlDb.ConnectionPool(config);

    try {
        await pool.connect();
        console.log('Connected to database');

        return pool;
    } catch (err) {
        console.log('Database connection failed!', err);

        return err;
    }
}
module.exports = {
    connectDB,

};