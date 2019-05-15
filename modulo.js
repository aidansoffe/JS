function modulo(num1, num2) {
  if(num1 === 0){
    return 0;
  }
  if (num2 === 0 || isNaN(num1) || isNaN(num2)) {
        return NaN;
}
if(num1 > 0 && num2 > 0){
  var counter = num1;
  while(counter>= Math.abs(num2)){
    counter=counter-num2;
}
}
return counter;
}
modulo(25, 4);

=> 1
