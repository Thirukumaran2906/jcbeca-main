const mongoose = require('mongoose');



const volumeSchema = new mongoose.Schema({
    Name: {
         type: String,
         required: true 
        },
    Topic: {
         type: String, 
         required: true 
        },
    S3Link: {
         type: String, 
         required: true 
        },

    Key : {
        type : String,
        required : true
    },
    Volume : {
        type : Number,   // volume 1 with 1st 4 months is ====  11 , 2nd volume  
        required : true
    },
    Date : {
        type : Number,
        required : true
    },
    Month : {
        type : Number,
        required : true
    },
    Year : {
        type : Number,
        required : true
    },
    
    isUploaded: {
         type: Boolean, 
         default: false 
        }
})

const Upload = mongoose.model('volume',volumeSchema);

module.exports = {Upload };