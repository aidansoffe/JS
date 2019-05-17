function convertObjectToList(obj) {
var result = [];
for (var i in obj){
  result.push([i, obj[i]]);
}
return result;
}
var obj = 
{
  name: 'Holly',
  age: 35,
  role: 'producer'
};

convertObjectToList(obj);

=> [ [ 'name', 'Holly' ], [ 'age', 35 ], [ 'role', 'producer' ] ]
