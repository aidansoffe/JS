function isOddWithoutModulo(num) {
  if((num & 1) === 0){
    return false;
  }
    return true;
}

isOddWithoutModulo(17);


=> true


///////////

function isOddWithoutModulo(num) {
   num = Math.abs(num)
while( num >= 2){
    num = num -2
}

if(num === 1){
    return true
}else{
    return false
}
 
}
