function getAllKeys(obj) {
  let result = [ ];
 for (var key in obj){
   result.push(key);
 }
 return result;
}

var obj = {
  name : 'Sam',
  age : 25,
  hasPets : true
};
getAllKeys(obj);


=> [ 'name', 'age', 'hasPets' ]
