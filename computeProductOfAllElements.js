function computeProductOfAllElements(arr) {
  if(arr.length<1){
    return 0;
  }
     var output = 1;
    for (var i = 0; i < arr.length; i++) {
        output = output * arr[i];
    }
    return output;
      }
   

    
    computeProductOfAllElements([2, 5, 6]);
    
       
      => 60

/////////////

function computeProductOfAllElements(arr) {
  // your code here
  if(arr.length === 0){
      return 0
  }
 return arr.reduce((a,i)=> a*i);
 
}
