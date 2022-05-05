const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const AVATAR_PATH = path.join('/uploads/profile');
const viewCsv = require('../controllers/viewCsv');
console.log('router loaded');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(__dirname);
      cb(null, path.join(__dirname,'..',AVATAR_PATH));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '.csv');
    }
  })

  const upload = multer({storage: storage});



router.post('/',upload.single('uploaded_file'),viewCsv.views);

module.exports = router;