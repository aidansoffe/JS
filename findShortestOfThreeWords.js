function findShortestOfThreeWords(word1, word2, word3) {
  if(word1.length <= word2.length && word1.length <= word3.length){
    return word1;
  }if(word2.length <= word1.length && word2.length <= word3.length){
    return word2;
  }return word3;
}

findShortestOfThreeWords('a', 'two', 'three');
