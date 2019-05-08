function getEvenLengthWordsAtProperty(obj, key) {
  var output = [];
 if(!Array.isArray(obj[key])){
   return [];
 }else 
for (var value in obj[key]){
  if(obj[key][value].length %2 === 0){
    output.push(obj[key][value]);
  }
}
return output;
}
var obj = {
  key: ['It', 'has', 'some', 'words']
};
getEvenLengthWordsAtProperty(obj, 'key');

=> [ 'It', 'some' ]
