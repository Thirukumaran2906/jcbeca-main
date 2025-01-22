const { Submission } = require('../models/submission.model');
const { Upload } = require('../models/volumes.model');




const GetAllFiles = async (req, res) => {
    try {
        let {volumeNumber , issue} =req.body;
        console.log(volumeNumber);
        const num = Number(volumeNumber+issue);
        console.log(num);
        const allFiles = await Upload.find({ Volume : num });
        console.log("data fetched")
        res.status(200).json(allFiles);
    } catch (error) {
        console.error('Error fetching files:', error);
        res.status(500).json({ message: 'Failed to fetch files' });
    }
};

const GetOneFile = async (req, res) => {
    try {
        let { PaperId } = req.body;
        const File = await Submission.findOne({ PaperId });
        res.status(200).json(File);
    } catch (error) {
        console.error('Error fetching files:', error);
        res.status(500).json({ message: 'Failed to fetch files' });
    }
};

module.exports = { GetAllFiles, GetOneFile };
