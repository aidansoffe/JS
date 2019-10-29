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

///////////////

function getElementsThatEqual10AtProperty(obj, key) {
    if(!obj[key] || !Array.isArray(obj[key])){
        return []
    }
return obj[key].filter(item => item === 10)
}
/////

function getElementsThatEqual10AtProperty(obj, key) {
    if(!Array.isArray(obj[key]) || (!obj[key].hasOwnProperty)){
        return []
    }
    var newArr = []
obj[key].forEach((number) => {
    if(number === 10){
        newArr.push(number)
    }
})
return newArr
}
