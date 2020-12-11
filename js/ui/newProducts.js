export function newProducts(json) {
    const newProductContainer = document.querySelector(".new-product-container");

    newProductContainer.innerHTML += `
        <h2>New Products</h2>
        <h3>See our two newest products</h3>
        <div class="product-container">
            <div class="new-product">
                <img src="./strapi-api-folder/public${json[0].image.url}" />
                <h4>${json[0].title}</h4>
                <h5>$ ${json[0].price}</h5>
            </div>
            <div class="new-product">
                <img src="./strapi-api-folder/public${json[1].image.url}" />
                <h4>${json[1].title}</h4>
                <h5>$ ${json[1].price}</h5>
            </div>
        </div>
        <div class="view-more-btn">
                <a href="./products.html">View more</a>
            </div>

        `;
};