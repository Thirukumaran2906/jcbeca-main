const express = require('express');
const router = express.Router();

const { getSignedUrl , GetFilesUser ,UpdateJournalFile  ,GetFilesVolumeIssue, SendMail} = require('../controllers/userUpload.controller')


router.post('/user-get-signed-url', getSignedUrl);
router.get('/get-journal-user', GetFilesUser);

router.put('/update-upload-document', UpdateJournalFile);
router.post('/getfiles', GetFilesVolumeIssue);

router.post('/response-email-user',SendMail);



module.exports = router;






