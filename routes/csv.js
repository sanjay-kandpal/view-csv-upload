const express = require('express');
const router = express.Router();
const viewCsv = require('../controllers/viewCsv');

router.post('/',viewCsv.views);

module.exports = router;