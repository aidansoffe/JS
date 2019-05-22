var name = 'bakytbekhhhftftyfyghghfvty..mkljkl';

function everyCharCapital(name){
  var result = '';
for (var i=0; i<name.length; i++){
if(i %2!==0){
result+=name[i].toUpperCase()
}else{
  result+=name[i]
}
}
return result
}

everyCharCapital(name)

=> 'bAkYtBeKhHhFtFtYfYgHgHfVtY..mKlJkL'
