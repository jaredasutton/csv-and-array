const readFilePromise = require('./readFilePromise.js'),
  csvDataToArray = require('./csvDataToArray.js')

function getCSVAsArray(rawPath){
    return readFilePromise(rawPath)
    .then(csvDataToArray)
}

module.exports = getCSVAsArray