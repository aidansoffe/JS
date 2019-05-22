var name = 'Aidan Munarbekova and Bakytbek Tatibekov';

function removeVowels(name){
   var result = '';

   for (var i=0; i<name.length; i++){
     var char = name[i];
     if('aiuoe'.match(char.toLowerCase())=== null){
       result+= char;
     }
   }
   return result;
}
removeVowels(name)


=> 'dn Mnrbkv nd Bkytbk Ttbkv'
