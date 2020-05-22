function countdown(n) {
  var stopInt = setInterval(() => {
    console.log(n);
    n--
    if(n === 0){
      console.log('Done')
      clearInterval(stopInt)
    }
  }, 1000)
}

countdown(7)
