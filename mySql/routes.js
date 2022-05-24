const express = require('express');
const router = express.Router();
const db = require('./actions')
router.get('/', async(req, res) => {
    const response = await db.getHairStyles();
    // console.log(response);
    res.json(
        response)
})
module.exports = router;