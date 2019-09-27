function getElementsThatEqual10AtProperty(obj, key) {
  let res = [];
  if( !Array.isArray(obj[key]) || obj[key] === [] || (!obj[key])) {
    return [];
  }
  for ( let key in obj){
    if(obj[key].length){
     obj[key].filter(numbers => {
      if(numbers === 10){
        res.push(numbers)
      }
     })
    } 
  }
  return res;
}

var obj = {
  key: [1000, 10, 50, 10, 10],
  nt: [1],
  gt: 10,
  fr: 10,
  se: 10
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output);


///////////////

function getElementsThatEqual10AtProperty(obj, key) {
    if(!obj[key] || !Array.isArray(obj[key])){
        return []
    }
return obj[key].filter(item => item === 10)
}
