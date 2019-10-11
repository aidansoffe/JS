function multiply(num1, num2) {
  return num1 / (1 / num2);
}
multiply(9, 5);


=>45


9/(1/5)= 9/0.2= 45

///////////////


   var resultIsPositive = true;
    if((num1 > 0 && num2 < 0) || (num2 > 0 && num1 < 0) ){
        resultIsPositive = false
    }
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    
var result = 0
for(var i=0; i < num2; i++ ){
    result += num1 
}
    if(resultIsPositive){
        return result;
    }else{
        return -result
    }
