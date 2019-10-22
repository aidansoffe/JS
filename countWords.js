function countWords(stringOfWords) {
  // your code here
  if(stringOfWords.length === 0){
      return {}
  }
  var obj = {}
  var splitted = stringOfWords.split(' ')
  for(var i = 0; i<splitted.length; i++){
      var count = splitted[i]
      if(obj[count] === undefined){
          obj[count] = 1
      }else {
          obj[count]++
      }
  }
  return obj
}
