const express = require('express');
const router = express.Router();

const { GetAllFiles } = require('../controllers/getFiles.controller')
const { test } = require('../controllers/proxy')


router.post('/volumes', GetAllFiles);

router.get('/download/:fileName', test);



module.exports = router;

