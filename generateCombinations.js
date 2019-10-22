function generateCombinations(array1, array2) {
  // create a loop which iterates over the first array
    // create an inner loop which iterates over the second array
      // log current element of first array and current element of 
      //second array to the console with space in between
      for(var i=0; i<array1.length; i++){
      for(var k=0; k<array2.length; k++){
          console.log(array1[i] + ' ' + array2[k])
      }
          
      }
      
}

var array1 = ['d', 'e', 'f']
var array2 = ['a', 'b', 'c']

generateCombinations(array1, array2)
