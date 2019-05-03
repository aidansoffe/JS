function removeEvenValues(obj) {
  for (var key in obj){
    if (Number.isInteger(obj[key]) && obj[key] %2 === 0){
      delete obj[key];
    }
  }
  return obj;
}

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); 
