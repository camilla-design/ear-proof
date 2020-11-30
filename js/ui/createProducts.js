export function createProducts(json) {
    const productContainer = document.querySelector(".products-container");

    productContainer.innerHTML = "";

    json.forEach(function (product) {
       
        productContainer.innerHTML += `
        <a href="./edit.html?id=${product.id}">
        <div class="container">
        <div class="product-img">
        <img src="./strapi-api-folder/public${product.image.url}" />
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