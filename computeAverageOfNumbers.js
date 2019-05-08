var nums = [1,2,3,4,5];

function computeAverageOfNumbers(nums) {
  if(nums.length < 1){
    return 0;
  }else{
  var sum = nums.reduce(function(a,b){
    return a+b;
  });
  return sum/nums.length;
  
}
}

computeAverageOfNumbers(nums);

=> 3
