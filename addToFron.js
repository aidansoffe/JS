function addToFront(arr, element) {
  return [element].concat(...arr);
}

// ...arr   if you have array inside the array.


function addToFront(arr, element) {
  arr.unshift(element)
    return arr;  
}
///It should be the SAME array, not a new array.
