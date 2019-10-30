//Time Limit 45 minutes
// Write a function toggleCase which takes in a string and returns a new string where all the lowercase 
// letters are changed to uppercase and all the uppercase letters are changed to lowercase.

// toggleCase('MaRio'); //'mArIO'
// toggleCase('PRP'); //'prp'
// toggleCase('Good news, everyone!'); //'gOOD NEWS, EVERYONE!'

function toggleCase(str){
  let result = ''
  for(let i=0; i<str.length; i++){
    if(str[i] === str[i].toLowerCase()){
      result+= str[i].toUpperCase()
    }else if(str[i] === str[i].toUpperCase()){
      result+= str[i].toLowerCase()
    }
  }

return result
}
var str = 'PRP'

toggleCase(str)
