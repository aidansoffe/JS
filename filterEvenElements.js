function filterEvenElements(arr) {
  var output= [];
  for (var i in arr){
    if(arr[i] %2 === 0){
      output.push(arr[i]);
    }
  }
  return output;
}
--> [2, 4, 6]

