const getCSVAsArray = require('./getCSVAsArray.js'),
  changeCSVAsArray = require('./changeCSVAsArray.js')

function csvFileAsArray(path){
  this.getValues = ()=>getCSVAsArray(path)
  this.changeValues = (changer,newPath)=>changeCSVAsArray(path,changer,newPath)
}

module.exports = csvFileAsArray