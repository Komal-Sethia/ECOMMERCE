import { getCartProductFromLS } from "./getCartProducts.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

export const removeProdFromCart = (id) => {
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    // Update the local storage after removing the item

    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    // to remove the div on click

    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();

        // show toast when product deleted from the cart

        showToast("delete" , id);
    }

    updateCartValue(cartProducts);
};