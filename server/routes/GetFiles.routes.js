const express = require('express');
const router = express.Router();

const { GetAllFiles } = require('../controllers/getFiles.controller')


router.get('/volumes', GetAllFiles);



module.exports = router;

