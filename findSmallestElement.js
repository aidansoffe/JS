function findSmallestElement(arr) {
  var output = arr[0];
  if(arr.length===0){
    return 0;
  }else{
  for (var i in arr){
    if(output > arr[i]){
      output = arr[i];
    }
  }
 
}
 return output;
}

findSmallestElement([4, 1, 9, 10]);

=> 1
