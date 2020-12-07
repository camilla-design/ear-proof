import {
    createMenu
} from "./components/common/createMenu.js";
import {
    baseUrl
} from "./settings/baseUrl.js";
import {
    displayMessage
} from "./components/common/displayMessage.js";

createMenu();

const productUrl = baseUrl + "/products/";

(async function () {
    try {
        const response = await fetch(productUrl);
        const json = await response.json();

        createProducts(json);

    } catch (error) {
        displayMessage("error", error, ".message-container");
    }
})();

export function createProducts(json) {
    const productContainer = document.querySelector(".products-container");

    productContainer.innerHTML = "";

    json.forEach(function (product) {

        let allUrlImages = "";

        if (!product.image_url) {
            allUrlImages = baseUrl + product.image.url;
        } else {
            allUrlImages = product.image_url;
        }

        productContainer.innerHTML += `
        <a href="./edit.html?id=${product.id}">
        <div class="container">
        <div class="product-img">
        <img src="${allUrlImages}" />
        </div>
        <div class="product-description">
        <h3>${product.title}</h3>
        <h4>$ ${product.price}</h4>
        </div>
        </div>
        </a>
        
        `;
    });
}