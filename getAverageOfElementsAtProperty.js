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

function getAverageOfElementsAtProperty(obj, key) {
    if(!Array.isArray(obj[key]) || obj[key].length === 0){
        return 0
    }
 let fil = obj[key].reduce((a,i)=> a+i);
 return fil / obj[key].length
}

///
function getAverageOfElementsAtProperty(obj, key) {
  
  if(!Array.isArray(obj[key]) || obj[key].length === 0){
      return 0
  }
  let sum = 0
  for(var value in obj[key]){
      sum+=obj[key][value]
  }
  return sum/obj[key].length
}
