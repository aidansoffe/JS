function extractValue(arr) {
  // console.log(arr)
const names =  arr.reduce((acc, val) => {
    acc.push(val.name)
  return acc;
}, []);
 return names
}

const arrOfObj = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
extractValue(arrOfObj)



function vowelCount(str) {
  let letters = str.replace(/\s/g, '').toLowerCase().split('')    

  return letters.reduce((acc, vowel) => {
  if('aeiou'.indexOf(vowel) !== -1) {
  if(acc[vowel]){
                acc[vowel]++;
            } else {
                acc[vowel] = 1;
            }
        }
        return acc;
    }, {});
}



function partition(arr, callBack) {
 return arr.reduce((acc, item) => {
   if(callBack(item)) {
     acc[0].push(item)
   } else {
     acc[1].push(item)
   }
   return acc;
 }, [[], []])
}
 
function isLongerThanThreeCharacters(val){
 return val.length > 3;
}
const names = ['Elie', 'Colt', 'Tim', 'Matt'];
 
partition(names, isLongerThanThreeCharacters)
