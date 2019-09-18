var myArray = ['Aidan Munarbekova', 'rainbow'];

function cutName(name){
  return name.split(' ')
}


var myInfo = {
  fullName: cutName(myArray[0]),
  favoriteColor: myArray[1],
  github: 'https://github.com/aidansoffe'
}
