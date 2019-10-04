function getAverageOfElementsAtProperty(obj, key) {
 if(!Array.isArray(obj[key]) || obj[key].length < 1){
   return 0;
 }else{
   var sum = obj[key].reduce(function(a, b){
     return a+b;
   })
 } return sum/obj[key].length;
}

var obj = {
  key: [1, 2, 3]
};
getAverageOfElementsAtProperty(obj, 'key');


=> 2

////////////////

function getOddLengthWordsAtProperty(obj, key) {
    if(!Array.isArray(obj[key])){
        return []
    }
   return obj[key].filter(str => str.length % 2 !== 0 )
}
