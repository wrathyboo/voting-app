import { diskStorage } from "multer";
import { extname, basename } from "path";

export const storage = diskStorage({
    destination: "./public/images/players",
    filename: (req, file, callback) => {
      callback(null, generateFilename(file));
    }
  });
  
  function generateFilename(file) {
    const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
    return `${randomName}${extname(file.originalname)}`;
  }