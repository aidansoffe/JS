var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

 var obj = {}
 obj.itemName = item
 obj.itemPrice = Math.floor(Math.random() * 100) + 1
 
 cart.push(obj)
 return `${item} has been added to your cart.`
}


function viewCart(c) {
  let l = c.length
  if (!l) {
    return 'Your shopping cart is empty.';
  }

  var newString = 'In your cart, you have ';

  var mapping = c.map(function (item, index) {
    let stuff = `${item.itemName} at $${item.itemPrice}, `
    let lastItem = `and ${item.itemName} at $${item.itemPrice}.`
    let oneItem = `${item.itemName} at $${item.itemPrice}.`
    if( c.length === 1) {
    
        newString = newString.concat(oneItem)
        return newString
      }
     else if(index === c.length-1) {
           newString = newString.concat(lastItem)
      } else {
            newString = newString.concat(stuff)
      }
   });
  return newString;
}
  

function total() {
  var totalPrice = 0 
  
  cart.map(function(item) {
    var num = item.itemPrice
    totalPrice += num
  })
    return totalPrice
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
