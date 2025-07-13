import { getCartProductFromLS } from "./getCartProducts.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

getCartProductFromLS(); // by doing this by default we get our datd in addToCart icon 

// To add the data into localStorage

export const addToCart = (event , id , stock) => {
    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProdElem = document.querySelector(`#card${id}`);
    // console.log(currentProdElem);

    let quantity = currentProdElem.querySelector(".productQuantity").innerText;
    let price = currentProdElem.querySelector(".productPrice").innerText;
    // console.log(quantity , price);

    price = price.replace("₹" , "");

    let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id == id);
    console.log(existingProd);
    

    if(existingProd && quantity > 1){
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);

        let updatedCart = {id , quantity , price};
        
        updatedCart = arrLocalStorageProduct.map((curProd) => {
            return curProd.id == id ? updatedCart : curProd;
        });

        console.log(updatedCart);

        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    
    }
    
    if(existingProd) {
        // alert("The product is already exist in the cart");
        return false;
    }
    
    price = Number(price * quantity);
    quantity = Number(quantity);
    
    arrLocalStorageProduct.push({id , quantity , price});
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
    
    // update the cart button value
    
    updateCartValue(arrLocalStorageProduct);
    
    // show toast when product deleted from the cart
    
    showToast("add" , id);
}