import { getCartProductFromLS } from "./getCartProducts.js";

export const updateCartProductTotal = () => {
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");

    let LocalCartProduct = getCartProductFromLS();
    let initialValue = 0;
    let totalProductPrice = LocalCartProduct.reduce((accum , currElem) => {
        let productPrice = parseInt(currElem.price) || 0;
        return accum + productPrice;
    }, initialValue);

    // console.log(totalProductPrice);

    productSubTotal.textContent = `₹${totalProductPrice}`;
    productFinalTotal.textContent = `₹${(totalProductPrice + 50)}`;


};

