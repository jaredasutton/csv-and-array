const fs = require('fs')

function readFilePromise(rawpath){
  return new Promise(
    (resolve,reject) => {
      console.log(`Working to open '${rawpath}'...`)
      fs.readFile(rawpath, 'utf8',
        (err,data)=>{!!err ? reject(err) : resolve(data)}
      )
    }
  )
}

function logFailOrSuccess(err){
  if(err) return console.error(err)
  else console.log("Success.")
}

module.exports = readFilePromise