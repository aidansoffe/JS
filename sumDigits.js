function sumDigits(num) {
   var res = 0;
  var sum = num.toString().split('');
 
  for(var i=0; i<sum.length; i++){
    if(sum[i] === '-'){
      i++;
      var converted = parseInt(sum[i]);
      res -= converted;
      continue;
    }
    var convert = parseInt(sum[i]);
      res += convert;
  }
  return res;
}
sumDigits(-316);

=> 4
