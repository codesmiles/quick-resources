const cloudinary = require("../../config/cloudinary");
const errorDey = require("../helpers/errorDey");

const upload = async (req, res, next) => {
  try {
    if (req.files === null || !req.files) next(errorDey( 400,"Please Upload an image","No file uploaded"));

    // check if the file is an image
    const checkIfImage = (img) => {
      if (!img.mimetype.startsWith("image"))
        return next(errorDey(400, "Please upload an image file or files"));
      return true;
    };

    const file = req.files.image;
    const imageUrls = [];

    if (Array.isArray(file)) {
      file.forEach((image) => checkIfImage(image));
      for (const image of file) {
        await cloudinary.uploader.upload(image.tempFilePath, (err, result) => {
          if (err) next(errorDey(err.message, 500));
          imageUrls.push(result.secure_url);
        });
      }
      req.body.file = imageUrls;
      next();
    } else {
      checkIfImage(file);
      await cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
        if (err) next(errorDey(err.message, 500));
        req.body.file = result.secure_url;
        next();
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = upload;

