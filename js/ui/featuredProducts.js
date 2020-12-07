import {
    baseUrl
} from "../settings/baseUrl.js";

export function featuredProducts(json) {
    const featuredContainer = document.querySelector(".featured-products-container");
    const featuredHeadline = document.querySelector(".featured-products-headline");

    featuredContainer.innerHTML = "";

    json.forEach(function (product) {

        if (product.featured === true) {

            let allUrlImages = "";

            if (!product.image_url) {
                allUrlImages = baseUrl + product.image.url;
            } else {
                allUrlImages = product.image_url;
            }

            featuredContainer.innerHTML += `
        <img src="${allUrlImages}" />
            <h3>${product.title}</h3>
            <h4>$ ${product.price}</h4>
        `;
            featuredHeadline.style.display = "block";
        }

    });


};