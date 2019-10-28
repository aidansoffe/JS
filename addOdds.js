function addOdds(numArray) {
  //implement this function
   let odds = 0
  for(var i=0; i<numArray.length; i++){
      if(typeof numArray[i] === 'number'){
          if(numArray[i] %2 !== 0){
      odds+= numArray[i]
     
  }
      }
  }
  
  return odds
}
