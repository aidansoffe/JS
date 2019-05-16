function computeSumBetween(a, b) {
  if(a>b){
    return 0;
  }
  var output = 0;
  for (var start = a; start < b; start++){
    output=output+start;
  
  }
  return output;
}
computeSumBetween(2, 5);

=> 9
