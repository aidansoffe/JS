function findShortestElement(arr) {
  var output = arr[0];
  if(arr.length === 0){
    return '';
  }else{
    for(var word in arr){
      if(output.length > arr[word].length){
        output = arr[word];
    }
  }
}
return output;
}
findShortestElement(['a', 'two', 'three', 'thryryyy', 'b']);
