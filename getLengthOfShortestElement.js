function getLengthOfShortestElement(arr) {
 
  var short = arr.length;
  if(arr.length <1){
    return 0;
  }else{
    for (var i in arr){
      if(short > arr[i].length){
        short = arr[i].length;
      }
    }
  }
    return short;
}

getLengthOfShortestElement(['one', 'two', 'three']);


=> 3
