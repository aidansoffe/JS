function removeEvenValues(obj) {
  // your code here
  for(var key in obj){
      if(obj[key] %2 === 0){
         delete obj[key]
      }
  }
  return obj[key]
}
