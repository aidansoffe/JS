function getAllElementsButNth(array, n) {
  let arr = []
 for(var i=0; i<array.length; i++){
     if(i === n){
         continue;
     }
       arr.push(array[i])
 }
return arr
}
