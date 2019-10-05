function getStringLength(string) {
  var counter = 0;
  for(var i in string){
    counter ++;
  }
  return counter;
}
getStringLength('hello');

=> 5


function getStringLength(string) {
    var count = 0
  string = string.split('')
      for(var i of string){
          count ++
      }
  
  return count
}
