function sumDigits(num) {
  var res = 0;
  var sum = num.toString();
  var numsInArr = sum.split('');
  for(var i=0; i<numsInArr.length; i++){
    if(numsInArr[i] === '-'){
      i++;
      var converted = parseInt(numsInArr[i]);
      res -= converted;
      continue;
    }
    var convert = parseInt(numsInArr[i]);
      res += convert;
  }
  return res;
}
sumDigits(-316);

=> 4
