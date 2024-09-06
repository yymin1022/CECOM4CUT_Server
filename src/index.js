import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import {writeFileSync} from "fs";

dotenv.config();

const app = express();
const server = http.createServer(app);

const FILE_DIR = process.env.FILE_DIR;

app.use(cors());
app.use(express.json({limit: '100mb'}));

app.get("/", (req, res) => {
    res.redirect("https://cecom.dev");
});

app.get("/download/result/:filename", (req, res) => {
    const FILE_NAME = req.params["filename"];
    const FILE_PATH = `${FILE_DIR}/${FILE_NAME}.jpg`;

    res.download(FILE_PATH);
});

app.post("/upload", (req, res) => {
    const FILE_DATA = req.body["file"];
    const FILE_NAME = req.body["filename"];

    const IMAGE_FILE = Buffer.from(FILE_DATA, "base64");
    writeFileSync(`${FILE_DIR}/${FILE_NAME}`, IMAGE_FILE);

    res.send(FILE_NAME);
});

server.listen(8080, "0.0.0.0", () => {
    console.log("Server listen on port 8080");
});
