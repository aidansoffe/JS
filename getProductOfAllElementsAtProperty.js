function getProductOfAllElementsAtProperty(obj, key) {
  var output = 1;
  if(!Array.isArray(obj[key]) ||obj[key].length ===0 ){
    return 0;
  }else{
    for (var number in obj[key]){
      output = output * obj[key][number];
      
    }
  }
  return output;
}
var obj = {
  key: [1, 2, 3, 4]
};
getProductOfAllElementsAtProperty(obj, 'key');

=> 24


///////////////

function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
  if(!Array.isArray(obj[key]) || obj[key].length === 0){
      return 0
  }
  return obj[key].reduce((a, b) => a*b, 1)
}
