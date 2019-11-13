function transposeTwoStrings(arr){
    var stringOne = arr[0];
    var stringTwo = arr[1];
    var ret = '';

    for (var i = 0; i < arr[0].length; i++) {
        ret += stringOne.charAt(i) + " " + stringTwo.charAt(i) + '\n';
    }

    return ret;
}



console.log(transposeTwoStrings(['Hello','World']))

// should return:
// H W  
// e o  
// l r  
// l l  
// o d
