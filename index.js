const getCSVAsArray = require('./getCSVAsArray.js'),
  changeCSVAsArray = require('./changeCSVAsArray.js'),
  writeToFile = require('./writeToFile.js'),
  arrayToMatrix = require('./arrayToMatrix.js')
  arrayToCSVData = require('./arrayToCSVData.js')

function csvFileAsArray(path){
  this.getValues = ()=>getCSVAsArray(path).then(arrayToMatrix)
  this.changeValues = (changer,newPath)=>changeCSVAsArray(path,changer,newPath)
  this.getValuesAsObj = (header)=>getCSVAsArray(path).then(arrayToMatrix).then(mat=>{
    if(header != undefined && header.length != mat[0].length){
      return console.error("Header array too short.")
    }
    header = header != undefined ? header : mat.shift()
    return mat.map(
      row=>{
        var tempObj = {}
        row.forEach((item,i)=>{tempObj[header[i]] = item})
        return tempObj
      }
    )
  })
}

function arrayToCSVFile(path,arr){
  writeToFile(path)(arrayToCSVData(arrayToMatrix(arr))).then((vals)=>{console.log('success')},console.error)
}

module.exports = {csvFileAsArray:csvFileAsArray,arrayToCSVFile:arrayToCSVFile}