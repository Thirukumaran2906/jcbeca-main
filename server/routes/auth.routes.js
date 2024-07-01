const express = require('express');
const router = express.Router()
const { AdminLogin , checkToken ,sendHashedPassword} = require('../controllers/auth.controller')

router.post('/login', AdminLogin);
router.get('/check', checkToken)
router.get('/hash', sendHashedPassword)


module.exports = router;


