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


function findUserByUsername(usersArray, username) {
  return usersArray.find(function(value){
   //  console.log(value.username)
   return value.username === username
 });
}
const users = [
 {username: 'mlewis'},
 {username: 'akagen'},
 {username: 'msmith'}
];
 
// findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined

 
 
 
function removeUser(usersArray, username) {
  let i = usersArray.findIndex(function(value){
return value.username === username
})
   if(i === undefined){
    return
   }else{
   return usersArray.splice(i,1)[0]
}
}
const users = [
 {username: 'mlewis'},
 {username: 'akagen'},
 {username: 'msmith'}
];
 
// removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined

