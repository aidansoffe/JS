var input = [1, 2];

function addToBackOfNew(arr, element) {
let newArray = [];
 newArray.push(...arr, element);
 return newArray;
}
addToBackOfNew(input, 3);
