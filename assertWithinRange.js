function assertWithinRange(low, high, actual, testName) {
  // your code here
  if(actual >= low && actual <= high){
      console.log('passed')
  }else {
      console.log('FAIL [' + testName + '] "' + actual + '" not within range '+ low + ' to '+ high)
  }
}

var blackjackScore = 20;
assertWithinRange(4, 21, blackjackScore, 'blackjack score should be between 4 and 21');
// console output:
// passed
SUCCESS CASE:

var dieRoll = 1;
assertWithinRange(1, 6, dieRoll, 'die roll should be between 1 and 6');
// console output:
// passed

FAILURE CASE:

var price = 101;
assertWithinRange(1, 100, price, 'price should be between 1 and 100');
// console output:
// FAIL [price should be between 1 and 100] "101" not within range 1 to 100
