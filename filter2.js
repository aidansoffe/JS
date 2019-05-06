var products = [
{ name: 'banana', type: 'fruit', quantity: 8, price: 7},
{ name: 'carrot', type: 'vegetable', quantity: 8, price: 0},
{ name: 'mango', type: 'fruit', quantity: 1, price: 9},
{ name: 'celery', type: 'vegetable', quantity: 3, price: 13},
{ name: 'apple', type: 'fruit', quantity: 5, price: 7}
];

products.filter(function(product) {
  return product.type === 'vegetable' && product.quantity < 5
  && product.price > 10
});


=> [ { name: 'celery', type: 'vegetable', quantity: 3, price: 13 } ]
