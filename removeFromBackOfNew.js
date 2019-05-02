function removeFromBackOfNew(arr) {
  const output = arr.slice(0, -1);
  return output;
}
var arr = [1, 2 ,4 ,6];
removeFromBackOfNew(arr);

// its the same as getAllElementsButLast.js removes 6 from old and gives to new array [1, 2, 4];
