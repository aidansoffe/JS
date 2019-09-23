function squareElements(arr) {
    var newArr = []
for(var i=0;i<arr.length; i++){
    newArr.push(arr[i]*arr[i])
}
return newArr
}

function squareElements(arr){
let result = arr.map(x => x ** 2)
return result
}

var arr = [ 1, 4, 5];
squareElements(arr);
