function getAllWords(str) {
  if (str === '') return [];
  str = str.split(' ')
  let sentence = [];
  for (let i = 0; i < str.length; i++){
    sentence.push(str[i]);
  }
    return sentence;
}

getAllWords('Radagast the Brown');


=> [ 'Radagast', 'the', 'Brown' ]
