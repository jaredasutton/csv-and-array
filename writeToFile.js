const fs = require('fs')

function writeToFile(path){
  return function (str){
    return new Promise(
      (resolve,reject) => {
        console.log(`Working to open '${path}'...`)
        fs.writeFile(path, str,
          (err)=>{!!err ? reject(err) : resolve(str)}
        )
      }
    )
  }
}

module.exports = writeToFile