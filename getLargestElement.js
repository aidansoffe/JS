function getLargestElement(arr) {
  var output = arr[0];
  if(arr.length ===0){
    return 0;
  }else{
    for (var word in arr){
      if(output < arr[word]){
        output = arr[word];
      }
    }
  }
  return output;
}

getLargestElement([5, 2, 8, 3]);

=> 8
