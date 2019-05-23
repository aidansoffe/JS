function isRotated(str1, str2)
{
  var basket = str1 + str1 + str1;
  if(basket.includes(str2)){
    return true;
  }
return false;
}

var str1= 'hello world'
var str2 = 'orldhello w'

isRotated(str1, str2)
