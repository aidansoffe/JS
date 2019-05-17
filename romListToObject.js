function fromListToObject(array) {
  var object = {};
  for (var cars = 0; cars<array.length;cars++){
    object[array[cars][0]]=array[cars][1];
  
  }
  return object;
  
}

var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
fromListToObject(array);

=> { make: 'Ford', model: 'Mustang', year: 1964 }
