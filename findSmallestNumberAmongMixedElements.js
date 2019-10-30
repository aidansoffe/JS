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

////////

function findSmallestNumberAmongMixedElements(arr) {
 let small = []
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      small.push(arr[i])

    }
    
  }
  
  if(small.length===0){
      return 0;
  }

 return small.reduce((a, b) => a <= b ? a: b)
}
