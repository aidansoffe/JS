function loopAnArrayOfObjects(arrayOfObjects) {
  // create a loop which iterates over the input array
    // create an inner loop which iterates over current inner object
      // log current value to the console
      for(var i =0; i<arrayOfObjects.length; i++){
          for(key in arrayOfObjects[i]){
              console.log(arrayOfObjects[i][key])
          }
      }
}
