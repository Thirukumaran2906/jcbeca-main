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
const port = process.env.PORT || 8080;

const dbURI = "mongodb+srv://thirukumaran2906:thiru@cluster-1.ezqm43h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1/jcbeca";

mongoose.connect(dbURI).then((result) => console.log('MongoDB connected'))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors())

app.use('/api/upload',uploadRoutes)
app.use('/api/files',FileRoutes)
app.use('/api/auth',AuthRoutes)


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