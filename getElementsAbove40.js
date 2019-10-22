function getElementsAbove40(numbers) {
    var count = 0; 
  for (var i = 0; i < numbers.length; i++) {
   
    if (numbers[i] > 40) {
      count++;
    }
  }

  return count;
}
