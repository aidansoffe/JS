function filterEvenLengthWords(words) {
  var output = [];
  for (var i in words){
    if(words[i].length %2 === 0){
      output.push(words[i]);
       
    }
    
  }
 return output;
}

filterEvenLengthWords(['word', 'words', 'word', 'words']);

=> [ 'word', 'word' ]
