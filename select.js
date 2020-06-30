function select(arr, obj) {
  var output = {};
  for (var letter of arr){
    if(obj.hasOwnProperty(letter)){
      output[letter] = obj[letter];
    }
  }
  return output;
}




var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var out = select(arr, obj);

