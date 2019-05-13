function getLargestNumberAmongMixedElements(arr) { 
  if(arr.length<1){
    return 0;
  }
  var newArr = [];
  for (var i in arr){
    if(typeof arr[i] === 'number'){
      newArr.push(arr[i]);
    }
  }
  if(newArr.length<1){
    return 0;
  }
  var largestNum = Math.max(...newArr)
  return largestNum;
}


getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);

=> 5
