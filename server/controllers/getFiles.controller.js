const { Upload } = require('../models/volumes.model');




const GetAllFiles = async (req, res) => {
    try {
        const allFiles = await Upload.find();
        console.log("data fetched")
        res.status(200).json(allFiles);
    } catch (error) {
        console.error('Error fetching files:', error);
        res.status(500).json({ message: 'Failed to fetch files' });
    }
};

module.exports = { GetAllFiles };
