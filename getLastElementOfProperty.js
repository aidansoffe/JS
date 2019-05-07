function getLastElementOfProperty(obj, key) {
if(!Array.isArray(obj[key])){
    return undefined;
  }
    var output = obj[key].length -1;
return obj[key][output];
}
var obj = {
  key: [1, 2, 5]
};
getLastElementOfProperty(obj, 'key');

=> 5
