function getNthElementOfProperty(obj, key, i) {
  if(!Array.isArray(obj[key])){
    return undefined;
  }else{
    return obj[key][i];
}
}

var obj = {
  key: [1, 8, 6]
};
getNthElementOfProperty(obj, 'key', 1);

=> 8
