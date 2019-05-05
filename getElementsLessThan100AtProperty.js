function getElementsLessThan100AtProperty(obj, key) {
let res = [];
  if( !Array.isArray(obj[key]) || obj[key] === [] || (!obj[key])) {
    return [];
  }
  for ( let key in obj){
    if(obj[key].length){
     obj[key].filter(numbers => {
      if(numbers < 100){
        res.push(numbers)
      }
     })
    } 
  }
  return res;
}
