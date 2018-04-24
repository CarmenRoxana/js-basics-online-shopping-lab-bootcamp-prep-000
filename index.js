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
 var price=Math.floor(Math.random()*100)+1;
 var obj = {itemName: item, itemPrice: price};
 cart.push(obj);
 return item + " has been added to your cart.";
}

function viewCart() {
  // write your code here
  if(cart.length===1){
   return "In your cart, you have " +cart[0].itemName+ " at $"+cart[0].itemPrice+ "."; 
  }else if(cart.length===2){
    return "In your cart, you have " +cart[0].itemName+ " at $"+cart[0].itemPrice+ ", and " +cart[1].itemName+ " at $"+cart[1].itemPrice+ "."; 
  }else if(cart.length>=3){
    var str='';
    for(var i=1;i<cart.length-1;i++){
      str+= cart[i].itemName+ " at $" +cart[i].itemPrice;
    }
    return "In your cart, you have " +cart[0].itemName+ " at $"+cart[0].itemPrice+ ", "+str+ ", and " +cart[cart.length-1].itemName+ " at $"+cart[cart.length-1].itemPrice+ "."; 
  }else{
    return "Your shopping cart is empty.";
  }
}

function total() {
  // write your code here
  var totalValue=0;
  for(var i=0;i<cart.length;i++){
    totalValue+=cart[i].itemPrice;
}
  return totalValue;
}

function removeFromCart(item) {
  // write your code here
  for(var i=0;i<cart.length;i++){
   if(cart[i].itemName===item){
    return cart.splice(i,1);
   }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber!==undefined){
    cart.splice(0,cart.length);
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  }else{
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
}