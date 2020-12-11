import {
    baseUrl
} from "../settings/baseUrl.js";

export function createProducts(json) {
    const productContainer = document.querySelector(".products-container");

    productContainer.innerHTML = "";

    json.forEach(function (product) {

        let imageUrl = "";

        if (!product.image_url) {
            imageUrl = baseUrl + product.image.url;
        } else {
            imageUrl = product.image_url;
        }

        productContainer.innerHTML += `
        <a href="./detail.html?id=${product.id}">
        <div class="container">
        <div class="product-img">
        <img src="${imageUrl}" />
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