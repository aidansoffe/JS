function getElementsGreaterThan10AtProperty(obj, key) {
  if(!Array.isArray(obj[key]) || obj[key] < 10 || !obj.hasOwnProperty(key)){
    return [];
  }
   var output = [];
  for( key in obj ){
    let currentNum = obj[key]  
    currentNum.filter(function(item){
      if(item > 10){
        output.push(item)
      }
    })
  }
  return output;
}

var obj = {
  key: [1, 20, 30]
};
getElementsGreaterThan10AtProperty(obj, 'key');

=> [ 20, 30 ]
