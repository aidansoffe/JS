function getAllElementsButFirst(array) {
  const input = array.splice(1);
  return input;
}

var array = [9, 2, 3, 4];
getAllElementsButFirst(array);
