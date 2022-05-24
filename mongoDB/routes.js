const express = require('express');
const router = express.Router();
const db = require('./actions')
router.get('/', async(req, res) => {
    console.log("getAll");
    const response = await db.getAllAppointment();
    // console.log(response);
    res.json(
        response)
})
router.post('/insert_new_one', async(req, res) => {
    const appointment = req.body
    console.log("insert_new_one", appointment);
    const response = await db.insertOne(appointment);
    res.json("success")
})
router.put('/delete_one', async(req, res) => {
    const appointment = req.body
    console.log("delete_one", appointment);
    const response = await db.deleteAppointment(appointment);
    res.json("success")
})


module.exports = router;