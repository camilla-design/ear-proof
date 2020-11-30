import { getExistingProduct } from "./utils/cartFunction.js";
import { baseUrl } from "./settings/baseUrl.js";

const cartItems = getExistingProduct();

const cartContainer = document.querySelector(".cart-container");
const totalPriceContainer = document.querySelector(".total-price");
let total = 0;

cartItems.forEach(cart => {
    cartContainer.innerHTML += `
                                <a href="./detail.html?id=${cart.id}">
                                <div class="products">
                                <div class="product-image">
                                <img src="${baseUrl}${cart.image}" />
                                </div>
                                <div class="product-text">
                                <h3>${cart.name}</h3>
                                <h4>$ ${cart.price}</h4>
                                </div>
                                </div>
                                </a>
                                `;
    const value = parseFloat(cart.price);

    total = value + total;

    totalPriceContainer.innerHTML = "$" + total;
});






