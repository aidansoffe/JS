function average(numbers) {

  return sum(numbers)/numbers.length;
}

function sum(numbers) {
return numbers.reduce((acc, item) => acc += item)
}

average([1,2,3])

=> 2
