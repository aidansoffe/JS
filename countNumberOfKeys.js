function countNumberOfKeys(obj) {
  let count =0;
  for (var key in obj){
    if (obj.hasOwnProperty(key)) count++;
  }
  return count;
}
