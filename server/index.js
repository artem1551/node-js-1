const express = require('express');
const app = express();
const port = 1010;

app.use(express.static(__dirname + './../'));



app.listen(port, () => {
    console.log(`${port} started`)
});