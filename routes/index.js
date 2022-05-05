const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const multer = require('multer');

router.get('/',homeController.home);
router.use('/csv-views',require('./csv'));

module.exports = router;
