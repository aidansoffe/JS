

function hasOddNumber(arr) {
  return arr.some(function(array){

  return array %2 === 1
});

}
  hasOddNumber([1,2,2,2,2,2,4]) //true
  hasOddNumber([2,2,2,2,2,4]) //false


function hasAZero(num, z) {
  return num.toString().split('').some(function (zero) {
    return '0'.includes(zero)
  });
}


hasAZero(3332123213101232321) // true
// hasAZero(1212121) // false






function hasOnlyOddNumbers(arr) {
  return arr.every(function (num) {
    return num %2 === 1
  }) 

}
    // hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false







function hasNoDuplicates(arr) {
return arr.every(function(num) {
  return arr.indexOf(num) === arr.lastIndexOf(num)
})
}

    // hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true




   


function hasCertainKey(arr, key) {
  return arr.every(function(obj) {
    return obj[key]
  })
}
 var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    // hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false


    
  

function hasCertainValue(arr, key, searchValue) {
  return arr.every(function(obj, idx) {
    return obj[key] === searchValue
  
})
}


var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    // hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
