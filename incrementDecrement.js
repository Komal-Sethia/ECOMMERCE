import { getCartProductFromLS } from "./getCartProducts.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

export const incrementDecrement = (event, id, stock, price) => {
    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuantity = currentCardElement.querySelector(".productQuantity");
    const productPrice = currentCardElement.querySelector(".productPrice");

    let quantity = 1;
    let localStoragePrice = 1;


    let LocalCartProduct = getCartProductFromLS();

    let existingProd = LocalCartProduct.find((curProd) => curProd.id == id);

    if(existingProd){
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price;
    }else{
        localStoragePrice = price;
        price = price;  // actual price that we are getting
    }

    if (event.target.className == "cartIncrement") {
        if(quantity < stock){
            quantity += 1;
        }else if(quantity == stock){
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }

    if(event.target.className == "cartDecrement"){
        if(quantity > 1){
            quantity -= 1;
        }
    }

    //finally we will update the price in localStorage

    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));

    let updatedCart = {id , quantity , price: localStoragePrice};
        
    updatedCart = LocalCartProduct.map((curProd) => {
        return curProd.id == id ? updatedCart : curProd;
    });

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

    // also we need to reflect the changes on screen too

    productQuantity.innerText = quantity;
    productPrice.innerText =  localStoragePrice;
    

    // calculating the card total in our cartProducts page
    
    updateCartProductTotal();
};