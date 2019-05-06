var products = [
{ name: 'banana', type: 'fruit'},
{ name: 'carrot', type: 'vegetable'},
{ name: 'mango', type: 'fruit'},
{ name: 'celery', type: 'vegetable'},
{ name: 'apple', type: 'fruit'}
];

products.filter(function(product) {
  return product.type === 'fruit';
});
