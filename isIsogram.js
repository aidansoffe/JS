function isIsogram(str) {
let newStr = str;
for(var i=0; i<newStr.length; i++){
  for(var j=i+1; j<newStr.length; j++){
    if(newStr[i]===newStr[j]){
      return false;
    }
  }
}
return true;
}
  
  isIsogram("moses");  
