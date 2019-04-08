const getCSVAsArray = require('./getCSVAsArray.js'),
  arrayToCSVData = require('./arrayToCSVData.js'),
  writeToFile = require('./writeToFile.js')

function changeCSVAsArray(rawPath,changer,newPath){
    return getCSVAsArray(rawPath)
    .then(changer != undefined ? changer : (data)=>data)
    .then(arrayToCSVData)
    .then(writeToFile(newPath != undefined ? newPath : rawPath))
}

module.exports = changeCSVAsArray