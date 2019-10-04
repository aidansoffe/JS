function getOddLengthWordsAtProperty(obj, key) {
  var output = [];
 if(!Array.isArray(obj[key])){
   return [];
 }else 
for (value in obj[key]){
  if(obj[key][value].length %2 !== 0){
    output.push(obj[key][value]);
  }
}
return output;
}
var obj = {
  key: ['It', 'has', 'some', 'words']
};
getOddLengthWordsAtProperty(obj, 'key');

=> [ 'has', 'words' ]
   

/////////////////

function getOddLengthWordsAtProperty(obj, key) {
    if(!Array.isArray(obj[key])){
        return []
    }
   return obj[key].filter(str => str.length % 2 !== 0 )
}
