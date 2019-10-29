function convertDoubleSpaceToSingle(str) {
  let output = [];
  str = str.split('  ')
  for ( var i =0; i < str.length; i++){
    output.push(str[i]);
  }
  return output.join(' ');
}

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output);


/////////

function convertDoubleSpaceToSingle(str) {
  
  return str.replace(/ {1,}/g," ")
}
