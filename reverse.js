var name = 'Aidan'

function reverse(name){
  var rev = ''
  for (var i=name.length-1; i>=0; i--){
    rev+=name[i]
  }
  return rev;
}

reverse(name);
