function removeElement(array, discarder) {
  if(array[item] === discarder || !array){
    return [];
  }
  var output = [];
  for (var item of array){
    if(item !== discarder){
      output.push(item);
    }
  }
  return output;
}

removeElement([1, 2, 3, 2, 1], 2);


=> [ 1, 3, 1 ]
