function getLongestWordOfMixedElements(arr) {
 if(arr.length<1){
   return "";
 }
 var newArr = [];
 for (var item in arr){
   if(typeof arr[item] === 'string'){
     newArr.push(arr[item]);
   }
 }
 if(newArr.length<1){
   return "";
 }
 var longestWord = newArr[0];
 for (var i in newArr){
   if(longestWord.length<newArr[i].length){
     longestWord=newArr[i];
   }
 }
 return longestWord;

}
getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);

=> 'word'


///////////////////

function getLongestWordOfMixedElements(arr) {
  let str = arr.filter((word) => typeof word === 'string')
  
  if(str.length===0){
      return ''
  }
  return str.reduce((a, b) => a.length >= b.length ? a:b)
  
}
