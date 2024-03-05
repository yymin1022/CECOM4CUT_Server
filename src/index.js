import express from "express";
import cors from "cors";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(cors());

app.get("/", (req, res) => {
    res.redirect("https://cecom.dev");
});

server.listen(8080, "0.0.0.0", () => {
    console.log("Server listen on port 8080");
});