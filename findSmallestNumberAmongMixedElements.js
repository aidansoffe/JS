function findSmallestNumberAmongMixedElements(arr) {
  if(arr && arr.length ){
    let filteredNums = arr.filter(function(item){
      return typeof item === 'number';
    });
    if (filteredNums.length === 0){
      return 0;
    }
    
   let minNum = Math.min(...filteredNums);
   return minNum;
  }
  
  return 0;
}

findSmallestNumberAmongMixedElements([10, 6 , 8, 'hi', true, 2]);
