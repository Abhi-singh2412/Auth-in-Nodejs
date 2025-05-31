const cloudinary = require('../config/cloudinary');


const uploadToCloudinary = async(filepath)=>{
    try {
        const result = await cloudinary.uploader.upload(filepath);

        return{
            url:result.secure_url,
            publicId:result.public_id,
        }
        
    } catch (error) {
        console.log(error);
        throw new Error(`error while uploading to cloudinary `)
        
    }
}

module.exports = uploadToCloudinary;