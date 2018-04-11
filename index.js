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
  var sent = "In your cart, you have ";
  for (var i=0; i < cart.length; i++){
      var helpObj = cart[i];
      sent = sent + helpObj.itemName + "at $" + helpObj.itemPrice;
      if (i===cart.length) return sent = sent + '.';
      else if (i===cart.length - 1 ) sent = sent +' and ';
      else sent = sent + ', '
  }
  return sent;
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
