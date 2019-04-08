const regex = /[\,][\,]{1,}|((?<=([\,])|^)([\"](((\"){2})*|[^\"])*(?=[\"]))|[^\"\,]{1,}(?=[\,]|$))/g
const regeT = /[\t][\t]{1,}|((?<=([\t])|^)([\"](((\"){2})*|[^\"])*(?=[\"]))|[^\"\t]{1,}(?=[\t]|$))/g
const regeP = /[\|][\|]{1,}|((?<=([\|])|^)([\"](((\"){2})*|[^\"])*(?=[\"]))|[^\"\|]{1,}(?=[\|]|$))/g

function regTest(data){ 
  var arr = []
  while ((myArray = regex.exec(data)) !== null) {
    //console.log(myArray[0])
    if (myArray[0][0] == "\"" ) arr.push(myArray[0].slice(1))
    else if (myArray[0][0] == "\"" && myArray[0].length == 1) arr.push("")
    else if (myArray[0][0] == ",") {
      var splitR = myArray[0].split(",")
      //console.log("commas - 2 =>: ", splitR.slice(2)) //splitR.slice(2) removes "surrounding blanks"
      arr = arr.concat(splitR.slice(2))
      //console.log(arr)
    }
    else arr.push(myArray[0])
  }
  //console.log(arr)
  return arr
}

function csvDataToArray(data) {
  var lines = (data.split("\r\n").length > 1 ? data.split("\r\n") : data.split("\n"))
  lines.pop()
  var arr = lines.map(item=>regTest(item))
  return arr
 }

 module.exports = csvDataToArray