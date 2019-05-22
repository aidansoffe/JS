function findPairForSum(array, number)
{
  var pairs = [];
  for (let i=0; i<array.length; i++){
    for(let j=i+1; j<array.length; j++){
      if(array[j]===number - array[i]){
        pairs.push(array[i], array[j]);
      }
    }
}
return pairs;
}
findPairForSum([3, 34, 4, 12, 5, 2], 46);
