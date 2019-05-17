function transformEmployeeData(array) {
   var newArr = [];
  for(var i=0;i<array.length;i++){
    var newObj={};
    for(var k=0;k<array[i].length;k++){
      newObj[array[i][k][0]]=array[i][k][1];
    }
      newArr.push(newObj);
  }

  return newArr;
}
var array = 
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

transformEmployeeData(array);


   
=> [ { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
  { firstName: 'Mary',
    lastName: 'Jenkins',
    age: 36,
    role: 'manager' } ]
