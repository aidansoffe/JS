function getSumOfAllElementsAtProperty(obj, key) {
  var output = 0;
  if(!Array.isArray(obj[key]) || obj[key].length ===0){
    return 0;
  }else{
  for(var number in obj[key]){
    output=output+obj[key][number];
  }
  }
  return output;
}
var obj = {
  key: [4, 1, 8]
};
getSumOfAllElementsAtProperty(obj, 'key');

=> 13

///////////

function getSumOfAllElementsAtProperty(obj, key) {
  if(!Array.isArray(obj[key]) || obj[key].length === 0 ){
      return 0
  }
  return obj[key].reduce((a,b) => a+b)
}
