const conn = require("./connection.js")
const sqlDb = require("mssql")

async function getAll() {
    const DB = await conn.connectDB();
    const _query = "select * from appointments"
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

async function insertOne(item) {
    const DB = await conn.connectDB();
    let value = []
    const date = new Date(item["date"])
    console.log(date);
    const _query = `INSERT INTO appointments (customer_name,hair_style_name,start_time,end_time,date,phone) VALUES (@customer_name,@hair_style_name,@start_time,@end_time,@date,@phone)`
    try {
        const result = await DB.request()
            .input("customer_name", sqlDb.VarChar(50), item["customer_name"])
            .input("hair_style_name", sqlDb.VarChar(50), item["hair_style_name"])
            .input("start_time", sqlDb.VarChar(50), item["start_time"])
            .input("end_time", sqlDb.VarChar(50), item["end_time"])
            .input("date", sqlDb.DateTime, date)
            .input("phone", sqlDb.VarChar(50), item["phone"])

        .query(_query);

        return result.recordset;
    } catch (err) {
        console.log('Error querying database', err);
        return err;
    } finally {
        DB.close();
    }
}

async function deleteOne(item) {
    const DB = await conn.connectDB();
    const date = new Date(item["date"])
    const _query = `DELETE FROM appointments WHERE customer_name=@customer_name AND start_time =@start_time AND date =@date`
    try {
        const result = await DB.request()
            .input("customer_name", sqlDb.VarChar(50), item["customer_name"])
            .input("start_time", sqlDb.VarChar(50), item["start_time"])
            .input("date", sqlDb.DateTime, date)
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
    insertOne,
    deleteOne
};