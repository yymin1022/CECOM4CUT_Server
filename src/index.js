import express from "express";
import cors from "cors";
import http from "http";

const app = express();
const server = http.createServer(app);

const FILE_DIR = "/Data/";

app.use(cors());

app.get("/", (req, res) => {
    res.redirect("https://cecom.dev");
});

app.get("/download/:filename", (req, res) => {
   res.send(`Download Filename is ${req.params["filename"]}`);
});

app.get("/upload/:filename", (req, res) => {
    res.send(`Upload Filename is ${req.params["filename"]}`);
});

server.listen(8080, "0.0.0.0", () => {
    console.log("Server listen on port 8080");
});