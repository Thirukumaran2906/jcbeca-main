const express = require('express');
const router = express.Router();

const { getSignedUrl, updateUploadDetails } = require('../controllers/upload.controller')


router.post('/get-signed-url', getSignedUrl);
router.put('/update-upload-status',updateUploadDetails );



module.exports = router;






