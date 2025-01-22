const express = require('express');
const router = express.Router();

const { GetAllFiles ,GetOneFile} = require('../controllers/getFiles.controller')
const { test } = require('../controllers/proxy')


router.post('/volumes', GetAllFiles);

router.get('/download/:fileName', test);

router.post('/getfile',GetOneFile);



module.exports = router;

