function filterOddElements(arr) {
  var output = [];
  for (var i in arr){
    if(arr[i] %2=== 1){
      output.push(arr[i])
    }
  }
  return output;
}
filterOddElements([1, 2, 3, 4, 5]);

=> [ 1, 3, 5 ]
