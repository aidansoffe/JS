function calculateBillTotal(preTaxAndTipAmount) {
  // your code here
  var r = preTaxAndTipAmount * 0.095
  var k = preTaxAndTipAmount *0.15
  return preTaxAndTipAmount + r + k
}
