function detectOutlierValue(string)
{
  var newArr = string.split(' ').map((x)=>parseInt(x));
  var odd = string.split(' ').filter((x)=>x%2!==0);
  var even = string.split(' ').filter((x)=>x%2===0);
  if(odd.length == 1)
  return newArr.indexOf(parseInt(odd))+1
  else
  return newArr.indexOf(parseInt(even))+1
}

detectOutlierValue("2 4 8 10")
