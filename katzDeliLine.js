function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return ('Welcome, ' + name + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine) {
     if(katzDeliLine.length === 0){
        return "There is nobody waiting to be served!"
     }

 let person = katzDeliLine.shift()
 
  return     "Currently serving " + person + "."
      
  
  }
  
  function currentLine(line) {
    let numbered = []
    if(line.length === 0){
        return "The line is currently empty."
     }
     for (let i = 0; i < line.length; i++){
        numbered.push(` ${i+1}. ${line[i]}`)
    
     }
        return  "The line is currently:" + numbered
  }
     



// using forEach 
  
// function currentLine(katzDeliLine) {
//   var numbered = []
// if(katzDeliLine.length === 0) {
//   return 'The line is empty'
// }
// katzDeliLine.forEach(function(name, idx){

// numbered.push(` ${idx+1}. ${name}` )
// });
//   return `The line is currently: ${numbered}`
// }
