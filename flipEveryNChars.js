function flipEveryNChars(input, number)
{
   var last = '';

  for( let i = 0; i < input.length-1; i+=number) {
      var first = input.slice(i, i+number);
      var second = (first.split('').reverse().join(''));
      // console.log(second);
      last+=second;
      // console.log(last)
  }
  
  return last;
  
}
var input = 'a short example'; 
flipEveryNChars(input, 5);

-> 'ohs axe trelpma'
