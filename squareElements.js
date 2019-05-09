function squareElements(arr) {
  var output = [];
  for (var i in arr){
    output.push(arr[i] * arr[i])
  }
  return output;
}
squareElements([1, 2, 3]);


=> [ 1, 4, 9 ]
