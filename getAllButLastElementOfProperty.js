function getAllButLastElementOfProperty(obj, key) {
  if(!Array.isArray(obj[key]) || !obj[key] || obj[key].length<1){
    return [];
  }else{
    var input = obj[key].slice(0, -1);
  }
  return input;
}
var obj = {
  key: [1, 2, 3]
};
getAllButLastElementOfProperty(obj, 'key');

=> [ 1, 2 ]
