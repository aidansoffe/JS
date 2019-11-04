// Time Limit 45 minutes
// Write a function collectionConverter that takes an object or an array and returns a new collection in a different format (object to array or array to object).
function collectionConverter(param) {
    let res;
  if(Array.isArray(param)) {
     res = arrayToObject(param)
  } else {
     res = objectToArray(param)
  }

  return res;
}

// creating a function to convert object to an array

function objectToArray(objZoo) {
  var objToArray = []; // create new variable and assign an empty array

  for (var key in objZoo) { // for loop to iterate inside of an object
    objToArray.push(key, objZoo[key]) // push key and value into empty array
  }
  return objToArray;
}

// another function converting array to an object
function arrayToObject(arrZoo) {
  var arrToObject = {}; // create a new variable and assign an empty object 
  for (var i = 0; i < arrZoo.length; i += 2) { // run for loop to access every 2nd element for keys
    arrToObject[arrZoo[i]] = arrZoo[i + 1]; // creating a key and assigning a value to it
  }
  return arrToObject;
}




var arrZoo = ['zebra', 4, 'rhino', true, 'monkeys', 'many', 'tiger', 'siberian'];

var objZoo = {
  zebra: 4,
  rhino: true,
  monkeys: 'many',
  tiger: 'siberian'
}



collectionConverter(objZoo); 

