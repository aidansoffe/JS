function removeStringValuesLongerThan(num, obj) {
  for(var key in obj){
      if((Object.keys(obj[key]).length) > num){
          delete obj[key]
      }
  }
}
