const http = require('http')
const cors = require('cors')
const { load2 } = require('./nodejsjson.js');
const express = require('express')
const app = express();
const port = 5200;
app.use(cors({
    origin: "*",
}))
app.listen(port, () => console.log("Server is Running.."));
app.get('/user', (req, res) => {
    res.send(load2())
});