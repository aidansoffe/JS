function computeSumOfAllElements(arr) {
  var sum = 0;
  for (var number in arr){
    sum = sum + arr[number];
  }
  return sum;
}
computeSumOfAllElements([1, 2, 3]);

=> 6
