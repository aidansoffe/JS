function getLargestElementAtProperty(obj, key) {
  if(!Array.isArray(obj[key]) || !obj[key] || obj[key].length<1){
    return undefined;
  }else{
    var maxNum = 0;
    obj[key].forEach(function(i){
      if(maxNum < i){
        maxNum=i;
      }
    });
  }
  return maxNum;
}
var obj = {
  key: [1, 2, 4]
};
getLargestElementAtProperty(obj, 'key');

=> 4
