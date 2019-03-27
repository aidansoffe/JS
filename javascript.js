var fruits = ["apple", "cherry", "kiwi"];
console.log(fruits.indexOf("kiwi")) //gives an index of kiwi
console.log(fruits.push("lime")) // adds lime as a new string
console.log(fruits.push("lime"))
fruits.pop();
console.log(fruits.unshift("begin")) // adds a string at the beginning
fruits.shift("begin") // removes the string

console.log(fruits.join("+")) // converting an array to a string, use .join
