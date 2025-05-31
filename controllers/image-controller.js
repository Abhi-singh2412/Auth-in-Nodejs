const Image = require('../models/image');

const {uploadToCloudinary}= require('../helpers/cloudinary-helper')


const uploadImage = async(req,res)=>{

    try {

        //CHECK IF THE FILE IS MISSING IN REQ OBJECT 
        if(!req.file){
            return res.status(400).json({
                success:false,
                message:'File is required pls upload an image '

            })

            }


            //IF IMG IS NOT MISSING THEN UPLOAD TO CLOUDINARY 
            const {url, publicId} = await uploadToCloudinary(req.file.path);


            //now store the img url and the public id along with the uploaded user id in the db
            
            const newlyUploadedImage = new Image({
                url,
                publicId,
                uploadedBy:req.userInfo.userId
            })
await newlyUploadedImage.save();

res.status(200).json({
    success:true,
    message:"image uploaded cuccesfully ",
    image:newlyUploadedImage

})
        
    } catch (error) {
        console.log(error)
        
    }


}


module.exports = {
    uploadImage,
}