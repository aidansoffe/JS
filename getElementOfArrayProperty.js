function getElementOfArrayProperty(obj, key, index) {
  if(!Array.isArray(obj[key])){
    return undefined;
  }else{
  return obj[key][index];
}
}


var obj = {
 key: ['Jamil', 'Albrey']
};

getElementOfArrayProperty(obj, 'key', 0); 


=> [Jamil]
