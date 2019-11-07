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
  
 


function isIsogram(text) {
    text = text.toLowerCase().split('')
     var letter = new Set(text)
     return text.length === letter.size
  
}

////////////////
function isIsogram(str) {
    str = str.toLowerCase()
    return str.split('').every((a, b) => str.indexOf(a) == b)
}

  isIsogram("moses"); 
