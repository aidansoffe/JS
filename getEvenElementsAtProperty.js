function getEvenElementsAtProperty(obj, key) {
  var output = [];
  if(!Array.isArray(obj[key])){
    return [];
  }
  for (var i in obj[key]){
    if(obj[key][i] %2 === 0){
      output.push(obj[key][i]);
    }
  }
  return output;
}

var obj = {
  key: [1000, 11, 50, 17]
};
getEvenElementsAtProperty(obj, 'key');

=> [1000, 50]
