function getAllLetters(str) {
  
 let array = [];
  for (let letter of str) {
     array.push(letter);
   }
   return array;
   }

   getAllLetters('Radagast the Brown');
   
   
   //output
   [ 'R',
  'a',
  'd',
  'a',
  'g',
  'a',
  's',
  't',
  ' ',
  't',
  'h',
  'e',
  ' ',
  'B',
  'r',
  'o',
  'w',
  'n' ]
