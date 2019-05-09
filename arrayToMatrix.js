function arrToMatrix(arr){
  if (!Array.isArray(arr) ){
    console.log("arr's prototype is not Array.")
  } else {
    var topRow = arr[0]
    if (!Array.isArray(topRow)){
      console.log("arr[0]'s prototype is not Array.")
    }
    else {
      console.log("arr[0]'s prototype is Array.")
      var matColNum = maxLength(arr)
      console.log("maxLength: " + matColNum)
      var arr2 = arr.map(function(arri,i,mat){return fillArray(arri,matColNum)})
      return arr2
    }
  }
}

function maxLength(arr){
  return arr.reduce(
    (acc,curr)=>(
      (acc <= curr.length) ? curr.length : acc
    ),0
  )
}

function fillArray(arr,len){
  //console.log("Before:", arr)
  while (len - arr.length > 0){
    arr.push("")
  }
  //console.log("After:", arr)
  return arr
}

module.exports = arrToMatrix