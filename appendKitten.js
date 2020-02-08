var kittens = ["Milo", "Otis", "Garfield"] 

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
  
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var newArray = kittens.concat(name)
  return newArray
}

function prependKitten(name) {
  let newArray = []
  newArray.push(name, ...kittens)
  return newArray
  
}


function removeLastKitten() {
  let newArray = []
  newArray.push(...kittens)
   newArray.pop()
   return newArray
}

function removeFirstKitten() {
  let newArray = []
  newArray.push(...kittens)
  newArray.shift()
  return newArray
}

