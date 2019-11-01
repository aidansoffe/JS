function assertArraysEqual(actual, expected, testName){
  var sameLength = actual.length === expected.length;
  var sameValue = true
  for(var i = 0; i < expected.length; i++){
    if(expected[i] !== actual[i]){
      sameValue =false
      break;
    }
  }
  if(sameLength === sameValue){
  console.log('passed');
}else {
  console.log('FAILED ['+ testName +'] Expected "' + expected + '", but got "' + actual + '"')
}
}




var expected = ['b', 'r', 'o', 'k', 'e'];
var actual = 'broken'.split('');
var testName = 'splits string into array of characters'
assertArraysEqual(actual, expected, testName );
