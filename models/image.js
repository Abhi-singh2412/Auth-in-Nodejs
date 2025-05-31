const mongoose = require('mongoose');
const ImageSchema = new mongoose.Schema({
    url:{
        type:String,
        required:true,
    },
    publicId:{
        type:String,
        required:true,
    },
    uploadedBy:{//MEANS WICH USER HAS UPLOADED THE IMG 
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,


    }


},{timestamps:true});

module.exports = mongoose.model('Image',ImageSchema);