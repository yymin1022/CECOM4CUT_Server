import express from "express";
import cors from "cors";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(cors());

app.get("/", (req, res) => {
    res.redirect("https://cecom.dev");
});

app.get("/download/:filename", (req, res) => {
   res.send(`Filename is ${req.params["filename"]}`);
});

server.listen(8080, "0.0.0.0", () => {
    console.log("Server listen on port 8080");
});