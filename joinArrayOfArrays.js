function joinArrayOfArrays(arr) {
  var output = [];
  ouput = Array.prototype.concat.apply([], arr);
  return ouput;
}
joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);

=> [ 1, 4, true, false, 'x', 'y' ]
