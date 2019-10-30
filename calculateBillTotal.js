function calculateBillTotal(preTaxAndTipAmount) {
  var total = 0;
  var tax = preTaxAndTipAmount * 0.095;
  var tip = preTaxAndTipAmount * 0.15;
total = preTaxAndTipAmount + tax + tip;
return total;
}

calculateBillTotal(20);


=> 24.9

/////////

function calculateBillTotal(preTaxAndTipAmount) {
  // your code here
  return preTaxAndTipAmount + (preTaxAndTipAmount*0.095) + (preTaxAndTipAmount * 0.15)
}
