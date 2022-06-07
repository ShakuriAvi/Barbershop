const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/', async(req, res) => {
    const response = await controller.getAll();
    // console.log(response);
    res.json(
        response)
})
router.post('/insert_new_one', async(req, res) => {
    const hairStyle = req.body
        // console.log("insert_new_one", appointment);
    const response = await controller.insertOne(hairStyle);
    res.json("success")
})
module.exports = router;