function findShortestWordAmongMixedElements(arr) {
  if(arr.length<1){
    return '';
  }
  var strArray = [];
  for(let item in arr){
    if(typeof arr[item] === 'string'){
      strArray.push(arr[item])
    }
  }
    if (strArray.length< 1) {
    return "";
  }
  var shortestWord = strArray[0];
  for(var i=0; i<strArray.length; i++){
    if(shortestWord.length>strArray[i].length){
    shortestWord=strArray[i];
  }
}
  return shortestWord;
}

findShortestWordAmongMixedElements([4, 'two', 2, 'a', 'three']);


///////

function findShortestWordAmongMixedElements(arr) {
  let short = arr.filter((word) => typeof word === 'string')
  
  if(short.length===0){
      return '';
  }

 return short.reduce((a, b) => a.length <= b.length ? a: b)
}
