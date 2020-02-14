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



function viewCart() {
  var array = [];

  for ( let i = 0; i < cart.length; i++) {
      array.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;}

  if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }

  if (cart.length ===2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }else{
    let lastItem = array.pop();
    return `In your cart, you have ${array.join(', ')}, and ${lastItem}.`
  }
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
    const filtered = []
    
  cart.forEach(fruit => filtered.push(fruit.itemName));
  
 if (filtered.includes(item)) {
    cart = cart.filter(fruit => fruit.itemName !== item);
    return cart;
  }
  return "That item is not in your cart."
  
}
  



function placeOrder(cardNumber) {
var cartTotal
if (cardNumber){
  cartTotal= total()
  cart = []
  return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
}
else{
return "Sorry, we don't have a credit card on file for you."
}
}








