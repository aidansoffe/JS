


function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  var areaCode = this.parenthesize(this.getAreaCode());
  string = areaCode +" "+ this.getExchangeCode() +"-" +this.getLineNumber(); 
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  return this.slice(0, 3);
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  return this.slice(3, 6);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  return this.slice(6, 10);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

var inputArray = [6, 5, 0, 2, 7, 1, 9, 3, 1, 8];
var firstTest = new PhoneNumberFormatter(inputArray);

console.log(firstTest.render())
