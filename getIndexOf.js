function getIndexOf(char, str) {
  
  for (var i = 0; i < str.length; i++){
    if (str[i] == char){
      return i;
    }
  }
    return -1;
}
getIndexOf('a', 'I am a hacker');
