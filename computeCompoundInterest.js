function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
   var interest = 0;
 
  interest = principal * Math.pow((1 + interestRate/compoundingFrequency), (compoundingFrequency*timeInYears)) - principal;
  
  return interest;
}
computeCompoundInterest(1500, .043, 4, 6);
