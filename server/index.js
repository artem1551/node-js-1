const express = require('express');
// const ServerData = require('./Server.data.js');
const bodyParser = require("body-parser");
const app = express();
const port = 1010;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + './../'));

const state = [];


app.post('/data/update', function (request, response) {
    let bodyResult = request.body.values;
    state.push(bodyResult);
    response.send(bodyResult);
});

app.get('/data/status-check', function (request, response) {
    const result = {};
    result.count = state.length;

    const sumAllArrays = state.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.length;
    }, 0);

    const flattedArray = state.flat();
    const sumNumArray = flattedArray.reduce((acc, cur) => {
        return acc + Number(cur);
    }, 0);

    result.arithmeticMean = sumNumArray / sumAllArrays

    result.valuesTotalLength = sumAllArrays;


    response.send(result);
});


app.listen(port, () => {
    console.log(`${port} started`)
});