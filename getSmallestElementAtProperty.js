function getSmallestElementAtProperty(obj, key) {
    if(!Array.isArray(obj[key]) || obj[key].length < 1 || !obj[key]){
    return undefined;
  }else{
   var minValue = obj[key][0];
  obj[key].forEach(function(i){
    if(minValue>i){
	  minValue = i;
  }
  });
 
  }
   return minValue;
}


var obj = {
  key: [2, 1, 5]
};
getSmallestElementAtProperty(obj, 'key');

=> 1
