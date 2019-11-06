// Note: This is a simple, albeit temporarily incorrect implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// FUNCTION DEFINITION(S)
function every(array, callbackFunction) {
  var doesEveryElementMatch = true;

  for (var i = 0; i < array.length; i++) {
    doesEveryElementMatch = callbackFunction(array[i])
        
    }
  

  return doesEveryElementMatch;
}

// ASSERTION FUNCTION(S) TO BE USED

// TESTS CASES
function callbackFunction(val){
    return val < 20
}

function assertEqual2(actual, expected, testName){
    if(expected === actual){
        console.log('passed')
    }else {
        console.log('FAILED [' + testName + '] Expected ' + '"'+expected +'"' + ', but got ' + '"' +actual+'"')
    }
}

var arrayOne = [1, 3, 4, 7, 16];
var actualOne = every(arrayOne, callbackFunction)
assertEqual(actualOne, true, 'should log true, when all array is less than 20')

var arrayTwo = [1, 33, 4, 7, 16];
var actualTwo = every(arrayTwo, callbackFunction)
assertEqual(actualTwo, false, 'should log false, when not all array is less than 20')

