function computeFactorialOfN(n) {
  var sum = 1;
  for (var i=1; i<=n; i++){
    sum*=i;
  }
  return sum;
}

computeFactorialOfN(4);

=> 24
