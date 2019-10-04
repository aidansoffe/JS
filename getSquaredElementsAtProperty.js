function getSquaredElementsAtProperty(obj, key) {
  var output = [];
  if(!Array.isArray(obj[key]) || obj[key].length < 1){
    return [];
  }else{
    for (var prop in obj[key]){
      output.push( obj[key][prop] * obj[key][prop] );
    }
  }
  return(output);
}
var obj = {
  key: [2, 1, 5]
};
getSquaredElementsAtProperty(obj, 'key');

=> [ 4, 1, 25 ]

///////////////

function getSquaredElementsAtProperty(obj, key) {
    if(!Array.isArray(obj[key]) || obj[key].length === 0){
        return []
    }
  return obj[key].map(num => num*num)
}
