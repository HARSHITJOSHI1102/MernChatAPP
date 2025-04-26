import multer, { memoryStorage } from "multer"
import path from "path"

const storage  = multer.memoryStorage

const upload = multer({
    storage: storage,
    limits :{fileSize:1000000},
});

export default upload;