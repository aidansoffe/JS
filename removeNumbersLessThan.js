function removeNumbersLessThan(num, obj) {
  for (var key in obj){
    if (obj[key] < num){
      delete obj[key];
    }
  }
}
