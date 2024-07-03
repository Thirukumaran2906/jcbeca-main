const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const path=require('path')
dotenv.config();

const uploadRoutes= require('./routes/upload.routes')
const FileRoutes = require('./routes/GetFiles.routes')
const AuthRoutes = require('./routes/auth.routes')
const app = express();
const port = 80;

const dbURI =  process.env.MONGO_URL;

mongoose.connect(dbURI).then((result) => console.log('MongoDB connected'))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors())

app.use('/api/upload',uploadRoutes)
app.use('/api/files',FileRoutes)
app.use('/api/auth',AuthRoutes)
app.use(express.static(path.join(__dirname,'../client/src/images')))
app.use(express.static(path.join(__dirname,'../client/build/static/js')))

  app.use(express.static(path.join(__dirname,'../client/build')))
  app.get("*", (req, res) => {
    res.sendFile(
      path.join(path.resolve(__dirname, "../client/build/index.html"))
    );
  });


app.get("/", (req, res) => {
  res.send("Express Server");
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);

});
