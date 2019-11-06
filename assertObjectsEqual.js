function addFullNameProp(obj) {
  var firstName = obj[firstName];
  var lastName = obj[lastName];

  if (firstName && lastName) {
    obj.fullName = firstName + ' ' + lastName;
  }

  return obj;
}

var obj={
    firstName: 'Aidan',
    lastName: 'Munar'
};

function assertObjectsEqual(actual, expected, testName){
    // actual= JSON.stringify(actual)
    // expected = JSON.stringify(expected)
    if(actual === expected){
        console.log('passed')
    }else{
        console.log('FAILED [' +testName+ '] Expected '+expected +', but got '+actual)
    }
}

var actual = addFullNameProp(obj)
var expected = 'Aidan Munar'
assertObjectsEqual(actual, expected, 'Adding first and last name')


