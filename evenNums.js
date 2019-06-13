const numbers = [1,2,3,4,5];
const others = [6,7,8,98,77,66,55]

function evenNum(nums) {
  var output = [];
  for ( var i = 0; i < nums.length; i++ ) {
    if (nums[i] % 2 === 0)
    output.push(nums[i])
  }
  return output;
}

evenNum(others);
