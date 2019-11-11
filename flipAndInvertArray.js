

function flipAndInvertArray(input) {
  var reversedArray
  var result = []
  for (var i = 0; i < input.length; i++) {
    reversedArray = input[i].reverse()
    // console.log('look',reversedArray)
    for (var j = 0; j < reversedArray.length; j++) {
      if (reversedArray[j] === 0) {
        reversedArray[j] = 1
      } else {
        reversedArray[j] = 0
      }
  
    }
        result.push(reversedArray)
  }
    return result
  }

  var input = [[1, 1, 0], [1, 0, 1], [0, 0, 0]]
  // output [[1, 0, 0], [0, 1, 0], [1, 1, 1]] 

 flipAndInvertArray(input)

////////////
// Shorter version

  var result = function(arr){
    return arr.map((subArr) => subArr.map((element) => 
    (element === 0 ? 1 : 0)).reverse())
  }

  console.log(result(input))
