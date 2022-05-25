const express = require("express");
const app = express();

const multer = require("multer");
const upload = multer();

const bodyParser = require("body-parser");
const { response } = require("express");
const { request } = require("express");
const jsonParser = bodyParser.json();

app.use(express.static("public"));

app.get("/", (request, response) => {
    response.send("Hello from Express root!");
});

app.post("/tshirt", upload.array(), (request, response) => {
    const size = request.body.size;
    const color = request.body.color;
    response.send(`Command recieved! Size: ${size}. Color: ${color}.`);
});

app.post("/api/countries", jsonParser, (request, response) => {
    const countries = request.body;
    response.send(countries);
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Your app is listening on port ${listener.address().port}`);
});