function useBreak(array, index) {
  // create a loop which iterates over the input array
    // if current index is greater than input index
      // use described statement to stop the loop completely (must include semi-colon!)
    // log current array element to the console
    for(var i =0; i<array.length; i++){
        while(i <= index){
         
            console.log(array[i])
             break;
        }
          
    }
    
}
