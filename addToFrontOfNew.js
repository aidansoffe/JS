var input = [1, 2];
function addToFrontOfNew(arr, element) {
 let newArray = [];
 newArray.push(element, ...arr);
 return newArray
}

addToFrontOfNew(input, 15);

