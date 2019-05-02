function getElementsAfter(array, n) {
  const newArray = array.slice(n+1);
  return newArray;
}

getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);


// [d, e]
