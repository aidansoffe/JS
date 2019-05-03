function removeStringValues(obj) {
  for (var key in obj){
    if (typeof obj[key] === 'string'){
      delete obj[key];
    }
  }
  return obj;
}
var obj = {
  name: 'Sam',
  age: 20
}
removeStringValues(obj);
console.log(obj);
