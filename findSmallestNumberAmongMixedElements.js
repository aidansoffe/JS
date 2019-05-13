function findSmallestNumberAmongMixedElements(arr) {
  if(arr && arr.length ){
    var filteredNums = arr.filter(function(item){
      return typeof item === 'number';
    })
     var minNum = Math.min(...filteredNums);
     return minNum;
  } else {
    return 0;
  }
}

findSmallestNumberAmongMixedElements([10, 6 , 8, 'hi', true, 2]);
