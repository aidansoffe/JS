function filterOddLengthWords(words) {
  var output = [];
  for (var i = 0; i<words.length; i++){
  if(words[i].length %2 !== 0){
    output.push(words[i])
  }
  }
  return output;
}
 filterOddLengthWords(['there', 'it', 'is', 'now']);
 
 
 => [ 'there', 'now' ]
