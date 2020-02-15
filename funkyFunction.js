var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}


// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction
var theFunk = funkyFunction()()





var outerFunction = function() {
  function innerFunction() {
    return 'What'
  }
  return innerFunction;
}

console.log(outerFunction())