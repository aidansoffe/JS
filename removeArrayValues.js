function removeArrayValues(obj) {
  for (var key in obj){
    if (Array.isArray(obj[key])){
      delete obj[key];
    }
  }
  return obj;
}

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj);
