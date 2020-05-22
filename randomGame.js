function randomGame(){
  counter = 0
  var stopInt = setInterval(()=>{
  var randomInt = Math.random() * 1
  console.log(randomInt)
    counter++
    if (randomInt > .75){
      console.log(counter)
      clearInterval(stopInt)
    }
  }, 1000)
}




randomGame()
