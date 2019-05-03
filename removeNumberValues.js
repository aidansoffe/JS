function removeNumberValues(obj) {
 for (var key in obj){
   if(Number.isInteger(obj[key])){
     delete obj[key];
   }
 }
 return obj;
}
