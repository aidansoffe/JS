function countNumberOfKeys(obj) {
  let count =0;
  for (var key in obj){
    if (obj.hasOwnProperty(key)) count++;
  }
  return count;
}


////////

function countNumberOfKeys(obj) {
  var count = 0
  for(var key in obj){
      if(obj[key]){
          count++
      }
  }
  return count
}
