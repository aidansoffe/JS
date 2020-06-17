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
