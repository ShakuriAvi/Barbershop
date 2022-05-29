const express = require('express');
const router = express.Router();
const mongoDb = require('./actions')
const redis = require('../redis/actions')

router.get('/', async(req, res) => {
    console.log("getAll");
    // const response = await mongoDb.getAllAppointment();
    const cache = await redis.setCache()
    res.json(cache)
})

router.post('/insert_new_one', async(req, res) => {
    const appointment = req.body
    console.log("insert_new_one", appointment);
    const response = await mongoDb.insertOne(appointment);
    res.json("success")
})
router.put('/delete_one', async(req, res) => {
    const appointment = req.body
    console.log("delete_one", appointment);
    const response = await mongoDb.deleteAppointment(appointment);
    res.json("success")
})


module.exports = router;