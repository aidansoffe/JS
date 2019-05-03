function removeStringValuesLongerThan(num, obj) {
  for (var key in obj) {
    if( typeof obj[key] === "string" && obj[key].length > num){
      delete obj[key];
    }
}
}


var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj);
