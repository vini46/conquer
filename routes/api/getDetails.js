const express = require('express');
const router = express.Router();
const sheets = require('../../service/sheets');

router.get('/', async (req, res) => {
    const data = await sheets.getAllData();
    const jsonData = sheets.constructJson(data);
    res.status(200).contentType('application/json').json(jsonData);
})

router.post('/', async (req, res) => {
    sheets.addData(req.body);
    res.status(201).json({msg: 'ok'});
})

module.exports = router;