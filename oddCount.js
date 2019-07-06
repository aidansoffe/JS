function oddCount(n){
 var count = 0;
 
 for (var i=0; i<n; i++){
    if(i %2!==0){
      count++;
    }
  }
  return count;
}

