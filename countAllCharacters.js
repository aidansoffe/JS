function countAllCharacters(str) {
  let obj = {
  
  };
  for (let letter of str){
   obj[letter] = obj[letter] + 1 || 1;
  }
  return obj;
}
var str = "hobby";
countAllCharacters(str);

=> { h: 2, o: 1, b: 2, y: 1 }
