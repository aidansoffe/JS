function transformArrayToObject(array) {
   var result = {}
   for(var i=0; i< array.length; i++){
     var key = array[i][0]
     var value = array[i][1]
     result[key] = value
   }
  return result
}


var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

var result = {
  make : 'Ford',
  model : 'Mustang',
  year : 1964
}
