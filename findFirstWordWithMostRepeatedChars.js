function findMaxRepeatCountInWord(word) {
 var count = {};
 var total = 0;
 var frequent = '';

 word.split('').forEach(function(letter) {
  if(count[letter]) {
    count[letter]++
  } else {
    count[letter] = 1;
  }
 });
//  return count;
  for(var key in count) {
    if(count[key] > total) {
      total = count[key];
      frequent = key;
    }
  }
  return total
}


function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  var words = text.split(' ')
  for(var i = 0; i < words.length; i++){
    var repeatCountForWord = findMaxRepeatCountInWord(words[i])
    if(maxRepeatCountOverall < repeatCountForWord) {
      maxRepeatCountOverall = repeatCountForWord
      wordWithMaxRepeatCount = words[i]
    }
  }
    return wordWithMaxRepeatCount
}

var text = 'roses are red, violets are blue'


function assertEqual(actual, expected){
  if(actual === expected){
    console.log('passed')
  }else {
    console.log('Failed, Expected ' + expected + ', to be ' + actual)
  }
}

var actual = findFirstWordWithMostRepeatedChars(text)
var expected = 'roses'
assertEqual(actual, expected);
