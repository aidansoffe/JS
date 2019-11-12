// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  // split sentence into words
  var palindromes = []
  var splitted = sentence.split(' ')
  // iterate words and collect the palindromes
  for(var i = 0; i < splitted.length; i++){
      if(isPalindrome(splitted[i])){
          palindromes.push(splitted[i])
      }
  }
   var sortedPalindromes = palindromes.sort(sortAscendingByLength);
  var longestPalindrome = sortedPalindromes.pop();
  return longestPalindrome;
}


function isPalindrome(word) {
    word = word.toLowerCase()
    return word === reverseString(word)
  // hint: you can detect palindromes by comparing a string to its reverse
}


function reverseString(string) {
  var rev = ''
  for (var i=string.length-1; i>=0; i--){
    rev+=string[i]
  }
  return rev;
}


function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected){
   if(actual === expected){
    return console.log('passed')
} else {
    return console.log('Failed, should find a palindrom, Expected ' + expected + ', but got ' + actual )
} 
}


// TESTS CASES
