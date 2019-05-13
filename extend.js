function extend(obj1, obj2) {
  for (var key in obj2){
    if(obj1[key] === undefined){
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}

var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};
extend(obj1, obj2);

// console.log(obj1);
// console.log(obj2);
