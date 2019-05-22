var numbers =  [ 1, 3, 4, 5, 6, 7, 8, 9 ];

function allOddToEven(numbers){
  var first = [];
  var second = [];
  for (var i in numbers){
    if(numbers[i]%2!==0){
      first.push(numbers[i] + 1)
      // console.log(first)
    }
    if(numbers[i]%2===0){
      second.push(numbers[i])
      // console.log(second)
    }
    
  }
  var last = first.concat(second)
  return last;
  
  }
  




allOddToEven(numbers)
