function transformFirstAndLast(array) {
  var newObject = {};
  newObject[array[0]]=array[array.length-1];
  return newObject;
  
}

var array= ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
transformFirstAndLast(array);


=> { Queen: 'Beyonce' }
