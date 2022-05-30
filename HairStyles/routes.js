const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/', async(req, res) => {
    const response = await controller.getAll();
    // console.log(response);
    res.json(
        response)
})
module.exports = router;