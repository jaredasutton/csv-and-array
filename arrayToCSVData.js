function arrayToCSVData(arr){
  var arrRowsToStr = arr.map(
      (row)=>(
        row.map(
            cell=>(cell.toString().search(/(\"|\,)/) > -1 ? `"${cell}"` : cell)).join(",") + "\r\n"
      )).join("")
  return arrRowsToStr
}

module.exports = arrayToCSVData