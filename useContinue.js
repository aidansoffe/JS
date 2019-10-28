function useContinue(array, index) {
  // create a loop which iterates over the input array
    // if current index is equal to input index
      // use described statement to skip to next iteration of loop (must include semi-colon!)
    // log current array element to the console

  
      for(var i=0; i < array.length; i++){
        // console.log(array[i])
        if(i === index){
              continue;
        } 
        console.log(array[i])
        
    }
    }
