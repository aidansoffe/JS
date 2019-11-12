function detectOutlierValue(num) {
  num = num.split(' ')
  var result
  var even = num.filter((number) => +number % 2 === 0)
  var odd = num.filter((number) => +number % 2 !== 0)

  result = (even.length === 1) ? even : odd;
  // console.log(result);

  return [ '1', '1', '1', '10' ].indexOf(0) + 1
}

var num = "1 1 1 10"

detectOutlierValue(num)
