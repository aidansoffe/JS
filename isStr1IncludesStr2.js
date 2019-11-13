function isStr1IncludesStr2(str1, str2){
var doubled = str1+str1
var result = doubled.includes(str2)
console.log(result)

}

isStr1IncludesStr2('hello world',  'orldhello w')
