var items = {
    food: 1000,
    drinks: 2000
  };
  cart = 0;
  
  function  addCartValue(item) {
    return cart + item;
  }
  
  const addToCart = (item) => {
    cart = addCartValue(item);
  }
  
  addToCart(items.food);
  console.log("Cart value: ",cart);

  var cart;


 var ourObject ={
     name :"THIS KEYWORD",
     getThis : function(){
         console.log(this);
     }
 }
 ourObject.getThis();

 //Arrays

 let myArray = [1,2,3,4,5,6];
 console.log(myArray)

 // Add  at end
 myArray.push(7);
 console.log(myArray)

 // Remove from end
 myArray.pop();
 console.log(myArray)

 // Add at the Beginning
 myArray.unshift(0);
 console.log(myArray);

 // Remove from Beginning
 myArray.shift();
 console.log(myArray)