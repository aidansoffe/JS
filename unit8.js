function doubleValues(arr) {
const doubled = arr.map(x => x + x);
return doubled
}

doubleValues([5,1,2,3,10])

function onlyEvenValues(arr) {
let filtered = []
for (var i = 0; i< arr.length; i++){
  if(arr[i] % 2 === 0){
    filtered.push(arr[i])
  }
}
return filtered
}

onlyEvenValues([5,1,2,3,10])

function showFirstAndLast(arr) {
let firstAndLastChar = []

for(var i = 0; i < arr.length; i++){
let f = arr[i][0]
let l = arr[i][arr[i].length -1]
let all = f.concat(l)
firstAndLastChar.push(all)
}

return firstAndLastChar
}
showFirstAndLast(['colt','matt', 'tim', 'test'])
showFirstAndLast(['hi', 'goodbye', 'smile'])


function addKeyAndValue(arr, key, value){
  return arr.reduce(function(acc, curValue, index){
    acc[index][key] = value;
    return acc;
  },arr);
}

addKeyAndValue(
[
  {name: 'Elie'},
  {name: 'Tim'},
  {name: 'Matt'},
  {name: 'Colt'}
],
  'title',
  'instructor'
)





function vowelCount(str) {
  let arr = str.toLowerCase()
  var vowels = 'aeiou'

  let obj = {};

  for (let i of arr) {
    if(vowels.includes(i)) {
    obj[i] = obj[i] + 1 || 1;
    }
  }
  return obj;
}


vowelCount('I Am awesome and so are you')

function doubleValuesWithMap(num) {
  return num.map(n => n+n)
}
doubleValuesWithMap([1,-2,-3])



function valTimesIndex(arr) {
 let newArr = arr.map(function(val, index){ 
            return val * index 
        }) 
return newArr
}

valTimesIndex([1,2,3])



function extractKey(myArray) {
let newArray = []
for (var i=0; i < myArray.length; i++) {
  newArray.push(myArray[i].name)
        }
        return newArray
}
extractKey(
  [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ],
  'name'
)





function extractFullName(obj) {
 let fullName = []
 for( var i = 0; i < obj.length; i++){
   fullName.push(obj[i].first + ' ' + obj[i].last)
 }
 return fullName
}

extractFullName([
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
])



function filterByValue(obj) {
  let newArray = []
  for(var i =0; i < obj.length; i++){
if(obj[i]['isCatOwner']) {
  newArray.push(obj[i])
}
}
return newArray
}

filterByValue(
[
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia", isCatOwner: true},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele", isCatOwner: true}
],
'isCatOwner'
)




