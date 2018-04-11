var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = {
   itemName: item,
   itemPrice: Math.floor((Math.random() * 100) + 1)
 };
 cart.push(newItem);
return `${item} has been added to your cart.`;


}

function viewCart() {
  // write your code here
  if (cart.length == 0) return "Your shopping cart is empty.";
  var helpCart = cart.map(function(val){
    return `${this.itemName} at $${this.itemPrice}`
  });
  if (helpCart.length == 1) return `In your cart, you have ${helpCart[0]}.`;
  else {
    helpCart[helpCart.length -1] = ` and ${helpCart[helpCart.length -1]}.`;
    return `In your cart, you have ${helpCart.join()}.`;
  }
}


function total() {
  // write your code here
  //
    var total = cart[itemPrice].reduce(function(a,b){
      return a+b;
    },0);

  //}
}

function removeFromCart(item) {
  // write your code here
  for(var i=0; i< cart.length; i++){
    if (cart[i].itemName === item) return cart[i].splice(i,1);
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
}
