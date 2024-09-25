const express = require('express');
const axios = require('axios');

const test =  async (req, res) => {
  const { fileName } = req.params;

  try {
    const s3Url = `https://jcbeca.s3.amazonaws.com/${fileName}`;
    
    const response = await axios({
      url: s3Url,
      method: 'GET',
      responseType: 'stream', 
    });

    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    res.setHeader('Content-Type', response.headers['content-type']);

    response.data.pipe(res);
  } catch (error) {
    console.error('Error downloading the file:', error);
    res.status(500).send('Error downloading the file');
  }
}

module.exports = { test }