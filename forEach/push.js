const numbers = [1, 2, 3, 4, 5];

const points = ['Beck', 'Dave']
const doctors = ["Jane", "Joanna"]
// create an array
// push above numbers into the new array by adding 10

function pushing(students){
  var storage = [];

  students.forEach(function(student){
    storage.push('Mrs. ' + student);
  });
  return storage;
}



pushing(doctors)





// var names = ['Aidan', 'Beck'];

// console.log(names.push('Rogers'));

// console.log(names);

// names.push('Bishkek');

// console.log(names);
