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
app.use(express.json());

app.get("/", (req, res) => {
    res.redirect("https://cecom.dev");
});

app.get("/download/:filename", (req, res) => {
    const FILE_NAME = req.params["filename"];
    const FILE_FULL_DIR = `${FILE_DIR}/${FILE_NAME}.jpg`;

    res.download(FILE_FULL_DIR);
});

app.post("/upload", (req, res) => {
    const DATE = new Date();
    const DATE_MONTH = ('0' + (DATE.getMonth() + 1)).slice(-2);
    const DATE_DAY = ('0' + DATE.getDate()).slice(-2);
    const DATE_HOUR = ('0' + DATE.getHours()).slice(-2);
    const DATE_MINUTE = ('0' + DATE.getMinutes()).slice(-2);
    const DATE_SECOND = ('0' + DATE.getSeconds()).slice(-2);
    const CUR_DATE = `${DATE_MONTH}${DATE_DAY}${DATE_HOUR}${DATE_MINUTE}${DATE_SECOND}`;

    const FILE_DATA = req.body["file"];
    const FILE_NAME = `${CUR_DATE}.jpg`;

    const IMAGE_FILE = Buffer.from(FILE_DATA, "base64");
    writeFileSync(`${FILE_DIR}/${FILE_NAME}`, IMAGE_FILE);

    res.send(CUR_DATE);
});

server.listen(8080, "0.0.0.0", () => {
    console.log("Server listen on port 8080");
});