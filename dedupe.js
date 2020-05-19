function dedupe(numbers) {
let uniqueNum = [...new Set(numbers)]
return uniqueNum
}

dedupe([1,2,4,4,1,2]) // [1,2,4]


// [...new Set(param)] - checks for unique characters only
