const state = [];

function statusBody (request, response) {
    const result = {};
    result.count = state.length;

    const sumAllArrays = state.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.length;
    }, 0);

    const flattedArray = state.flat();
    const sumNumArray = flattedArray.reduce((acc, cur) => {
        return acc + Number(cur);
    }, 0);

    let unique = flattedArray.filter((val, index, a) => a.indexOf(val) === index); 

    result.arithmeticMean = sumNumArray / sumAllArrays
    result.valuesTotalLength = sumAllArrays;
    result.uniqueValues = unique;

    response.send(result);
};

function updateBody (request, response) {
    let bodyResult = request.body.values;
    state.push(bodyResult);
    response.send(bodyResult);
};


module.exports = {
    statusBody,
    updateBody,
};