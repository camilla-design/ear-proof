import {
    displayMessage
} from "./components/common/displayMessage.js";
import {
    createMenu
} from "./components/common/createMenu.js";
import {
    getToken
} from "./utils/storage.js";
import {
    baseUrl
} from "./settings/baseUrl.js";
import deleteButton from "./components/products/deleteButton.js";

const token = getToken();

if (!token) {
    location.href = "/";
}

createMenu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const productUrl = baseUrl + "/products/" + id;

const form = document.querySelector("form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const price = document.querySelector("#price");
const image = document.querySelector("#image-url");
const message = document.querySelector(".message-container");
const loading = document.querySelector(".loading");
const featured = document.querySelector("#featured-selector");
const inputId = document.querySelector("#id");
(async function () {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        title.value = details.title;
        description.value = details.description;
        price.value = details.price;
        image.value = details.image_url;
        featured.value = details.featured;
        inputId.value = details.id;

        deleteButton(details.id);


    } catch (error) {
        displayMessage("error", "error", ".message-container");
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
    const imageValue = image.value;
    const featuredValue = featured.value;
    const idValue = inputId.value;


    if (titleValue.length === 0 || descriptionValue.length === 0 || isNaN(priceValue) || priceValue.length === 0 || imageValue.length === 0) {
        return displayMessage("error", "Proper values need to be filled in", ".message-container");
    }

    updateProduct(titleValue, descriptionValue, priceValue, imageValue, featuredValue, idValue);
}

async function updateProduct(title, description, price, image, featured, id) {

    const url = baseUrl + "/products/" + id;

    const data = JSON.stringify({
        title: title,
        description: description,
        price: price,
        image_url: image,
        featured: featured
    });

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.updated_at) {
            displayMessage("success", "Product is updated!", ".message-container");
            form.reset();
        }

        if (json.error) {
            displayMessage("error", json.message, ".message-container");
        }

    } catch (error) {
        displayMessage("error", "error", ".message-container");
    }
}