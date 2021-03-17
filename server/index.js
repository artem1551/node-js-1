const express = require('express');
const ServerData = require('./Server.data.js');
const bodyParser = require("body-parser");
const app = express();
const port = 1010;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + './../'));

app.post('/data/update', ServerData.updateBody);

app.get('/data/status-check', ServerData.statusBody);

app.listen(port, () => {
    console.log(`${port} started`)
});