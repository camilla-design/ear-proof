import { getExistingProduct } from "./utils/cartFunction.js";
import { baseUrl } from "./settings/baseUrl.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if(!id) {
    document.location.href = "/";
}

const productUrl = baseUrl + "/products/" + id;

const form = document.querySelector("form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const price = document.querySelector("#price");
const image = document.querySelector("#image");
const message = document.querySelector(".message-container");
const loading = document.querySelector(".loading");

(async function() {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        title.value = details.title;
        description.value = details.description;
        price.value = details.price;


    } catch(error) {
        console.log(error);
    } finally {
        loading.style.display = "none";
        form.style.display = "block";
    }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const descriptionValue = description.value.trim();
    const priceValue = parseFloat(price.value);

    if (titleValue.length === 0 || descriptionValue.length === 0 || isNaN(priceValue) || priceValue.length === 0) {
        return displayMessage("error", "Proper values need to be filled in", ".message-container");
    }

    updateProduct(titleValue, descriptionValue, priceValue);
}

async function updateProduct(name, price, description) {
    
}