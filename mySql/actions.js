const { query } = require("express")
const res = require("express/lib/response")
const { connection } = require("mongoose")
const sqlDb = require("mssql")
const getHairStyles = async() => {
    response = {}
    const data = await getAll()
    console.log(data);
}



async function connectDB() {
    const config = {
        user: "sa",
        password: 'Avi123456',
        server: 'localhost',
        database: 'Barbershop',
        trustServerCertificate: true
    }
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

async function getAll() {
    const DB = await connectDB();
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
    getHairStyles,

};