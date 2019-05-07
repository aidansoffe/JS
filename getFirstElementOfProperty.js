function getFirstElementOfProperty(obj, key) {
  if(!Array.isArray(obj[key])){
    return undefined;
  }
  
  for (key in obj){
    return obj[key][0]
  }
}
var obj = {
  key: [1, 2, 4]
};



getFirstElementOfProperty(obj, 'key');

=> 1
