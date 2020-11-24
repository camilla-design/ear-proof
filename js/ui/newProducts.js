export function newProducts(json) {
    const newProductContainer = document.querySelector(".new-product-container");

        newProductContainer.innerHTML += `
        <div class="new-product">
        <h2>New Products</h2>
        <h3>See our new headphones</h3>
        <img src="./strapi-api-folder/public${json[0].image.url}" />
        <h5>${json[0].title}</h5>
        <h5>$ ${json[0].price}</h5>
        </div>
        <div class="new-product">
        <img src="./strapi-api-folder/public${json[1].image.url}" />
        <h5>${json[1].title}</h5>
        <h5>$ ${json[1].price}</h5>
        </div>
        <div class="view-more-btn">
                    <a href="#">View more</a>
                </div>

        `;
    };
