function getStringLength(string) {
  var counter = 0;
  for(var i in string){
    counter ++;
  }
  return counter;
}
getStringLength('hello');

=> 5
