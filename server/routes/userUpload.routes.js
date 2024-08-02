const express = require('express');
const router = express.Router();

const { getSignedUrl , GetFilesUser ,UpdateJournalFile  ,GetFilesVolumeIssue} = require('../controllers/userUpload.controller')


router.post('/user-get-signed-url', getSignedUrl);
router.get('/get-journal-user', GetFilesUser);

router.put('/update-upload-document', UpdateJournalFile);
router.post('/getfiles', GetFilesVolumeIssue);



module.exports = router;






