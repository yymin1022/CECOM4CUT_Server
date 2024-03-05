import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";

dotenv.config();

const app = express();
const server = http.createServer(app);

const FILE_DIR = "/Data";

app.use(cors());

app.get("/", (req, res) => {
    res.redirect("https://cecom.dev");
});

app.get("/download/:filename", (req, res) => {
    const FILE_NAME = req.params["filename"];
    const FILE_FULL_DIR = `${FILE_DIR}/${FILE_NAME}`;

    res.download(FILE_FULL_DIR);
});

app.get("/upload/:filename", (req, res) => {
    res.send(`Upload Filename is ${req.params["filename"]}`);
});

server.listen(8080, "0.0.0.0", () => {
    console.log("Server listen on port 8080");
});