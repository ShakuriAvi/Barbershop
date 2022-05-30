const express = require('express');
const router = express.Router();
const controller = require('./controller')


router.get('/', async(req, res) => {
    console.log("getAll");
    const response = await controller.getAll()
    res.json(response)
})

router.post('/insert_new_one', async(req, res) => {
    const appointment = req.body
        // console.log("insert_new_one", appointment);
    const response = await controller.insertOne(appointment);
    res.json("success")
})
router.put('/delete_one', async(req, res) => {
    const appointment = req.body
    console.log("delete_one", appointment);
    const response = await controller.deleteOne(appointment)
    res.json("success")
})


module.exports = router;