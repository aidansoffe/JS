function checkAge(name, age) {
  var output = '';
  if (age >= 21){
    output = 'Welcome, ' + name + '!';
  }
  else{
    output = 'Go home, ' + name + '!';
  }
  return output;
}

var output = checkAge('Adrian', 2);
console.log(output);
