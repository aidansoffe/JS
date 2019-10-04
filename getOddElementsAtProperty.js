function getOddElementsAtProperty(obj, key) {
  var output = [];
    for(var i in obj[key]){
    if(obj[key][i] %2 === 1){
      output.push(obj[key][i]);
    }
    }
     return output;
}
var obj = {
  key: [1, 2, 3, 4, 5]
};
getOddElementsAtProperty(obj, 'key');

=> [1, 3, 5]


/////////////

function getOddElementsAtProperty(obj, key) {
  // your code here
  if(!Array.isArray(obj[key]) || obj[key].length === 0){
      return []
  }
  return obj[key].filter(num => num %2 !==0)
}
