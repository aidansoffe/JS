function multiplyBetween(a, b){
 if ( a > b) {
    return 0;
  }
  
  var output = 1;
  for ( var start = a; start < b; start++ ) {
    output = output * start;
  }
  return output;

}
 multiplyBetween(2, 5);
 
 
 => 24
