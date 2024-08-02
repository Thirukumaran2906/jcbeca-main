const express = require('express');
const router = express.Router();

const { GetAllFiles } = require('../controllers/getFiles.controller')


router.post('/volumes', GetAllFiles);



module.exports = router;

