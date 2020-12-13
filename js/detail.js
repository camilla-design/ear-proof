import {
    getExistingProduct
} from "./utils/cartFunction.js";
import {
    baseUrl
} from "./settings/baseUrl.js";
import {
    displayMessage
} from "./components/common/displayMessage.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const productUrl = baseUrl + "/products/" + id;

(async function () {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        console.log(details);

        document.title = details.title;

        const container = document.querySelector(".product-detail-container");

        const cartItems = getExistingProduct();

        const doesObjectExist = cartItems.find(function (cart) {

            return parseInt(cart.id) === details.id;
        });


        console.log(doesObjectExist);

        container.innerHTML = `
        <a class="back-btn" href="./products.html"> Go back </a>
        <div class="product">
        <div class="product-image">
        <img src="${baseUrl}${details.image.formats.thumbnail.url}" />
        </div>
        <div class="product-text">
        <h2>${details.title}</h2>
        <p>${details.description}</p>
        <h3>$ ${details.price}</h3>
        <a class="add-cart-btn" data-id="${details.id}" data-name="${details.title}" data-price="${details.price}" data-image="${details.image.formats.thumbnail.url}" href="#">Add to cart</a>
        </div>
        </div>
        <div class="delivery-icon-container">
        <div class="delivery">
        <div class="fast-delivery-icon">
        <i class="fas fa-shipping-fast"></i>
        </div>
        <div class="fast-delivery-text">
        <h4>Fast delivery</h4>
        <p>Free delivery after $20</p>
        </div>
        </div>
        <div class="delivery">
        <div class="fast-delivery-icon">
        <i class="fas fa-box-open"></i>
        </div>
        <div class="fast-delivery-text">
        <h4>Safe delivery</h4>
        <p>Delivery to your door</p>
        </div>
        </div>
        </div>
        </div> `;

        const favoriteBtn = document.querySelector(".add-cart-btn");

        favoriteBtn.addEventListener("click", handleClick);

        function handleClick() {

            const id = this.dataset.id;
            const name = this.dataset.name;
            const image = this.dataset.image;
            const price = this.dataset.price;
            console.log(this.dataset);

            const currentProduct = getExistingProduct();

            const productExist = currentProduct.find(function (cart) {
                return cart.id === id;
            });

            if (productExist === undefined) {

                const product = {
                    id: id,
                    name: name,
                    image: image,
                    price: price
                };

                currentProduct.push(product);

                saveProducts(currentProduct);

            } else {
                const newProducts = currentProduct.filter((newProducts) => newProducts.id !== id);

                saveProducts(newProducts);
            }



        }

        function saveProducts(carts) {
            localStorage.setItem("cart", JSON.stringify(carts));
        }

    } catch (error) {
        displayMessage("error", error, ".message-container");
    }
})();