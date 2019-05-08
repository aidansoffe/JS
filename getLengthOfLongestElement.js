function getLengthOfLongestElement(arr) {
  var long = 0;
  if(arr.length <1){
    return 0;
  }else{
    for (var i in arr){
      if(long < arr[i].length){
        long = arr[i].length;
      }
    }
  }
    return long;
}

getLengthOfLongestElement(['one', 'two', 'three']);

=> 5
