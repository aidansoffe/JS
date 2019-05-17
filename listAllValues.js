function listAllValues(obj) {
var newArr = [];
for(var v in obj){
  newArr.push(obj[v]);
}
  return newArr;
}

var obj = 
{
  name : 'Krysten',
  age : 33,
  hasPets : false
};

listAllValues(obj);

=> [ 'Krysten', 33, false ]
