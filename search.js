function search(array, value) {
    for (var i=0; i<array.length; i++){
      if(array[i] === value){
        return(array.indexOf(value));
      }
    }
    return null;
  }


var array = [1, 3, 16, 22, 31, 33, 34]
search(array, 33) 


=> 5
