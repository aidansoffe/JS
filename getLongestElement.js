function getLongestElement(arr){
  if(arr.length===0){
    return "";
  }else{
    var output = arr[0];
    for (var i of arr){
      if(output.length < i.length){
        output = i;
      }
    }
  }
  return output;
}


getLongestElement(['one', 'two', 'three']);

=> 'three'
