function removeAPropertyAgain(arrayofObjects, index, key) {
  // remove the property at the given key from the object at the given index
  // return the input array of objects
  delete arrayofObjects[index][key]
  return arrayofObjects
}

var resultObject1 = removeAPropertyAgain([{q: 9, r: 10, text: 'bad entry'}, {a: 1, b: 2}], 0, 'text');
console.log('should log [{q: 9, r: 10}, {a: 1, b: 2}]:', resultObject1);
