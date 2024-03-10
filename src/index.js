import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import multer from "multer";

dotenv.config();

const app = express();
const server = http.createServer(app);

const FILE_DIR = process.env.FILE_DIR;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, FILE_DIR);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.redirect("https://cecom.dev");
});

app.get("/download/:filename", (req, res) => {
    const FILE_NAME = req.params["filename"];
    const FILE_FULL_DIR = `${FILE_DIR}/${FILE_NAME}`;

    res.download(FILE_FULL_DIR);
});

app.post("/upload", upload.single("file"), (req, res) => {
    res.send("Upload File");
    console.log(req.body);
});

server.listen(8080, "0.0.0.0", () => {
    console.log("Server listen on port 8080");
});