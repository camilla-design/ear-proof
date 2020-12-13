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

const token = getToken();

if (!token) {
    location.href = "/";
}

createMenu();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const price = document.querySelector("#price");
const message = document.querySelector(".message-container");
const image = document.querySelector("#image-url");
const featured = document.querySelector("#featured-selector");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const descriptionValue = description.value.trim();
    const priceValue = parseFloat(price.value);
    const imageValue = image.value;
    const featuredValue = featured.value;

    if (titleValue.length === 0 || descriptionValue.length === 0 || isNaN(priceValue) || priceValue.length === 0 || imageValue.length === 0) {
        return displayMessage("error", "Proper values need to be filled in", ".message-container");
    }

    addProduct(titleValue, descriptionValue, priceValue, imageValue, featuredValue);
}

async function addProduct(title, description, price, image, featured) {

    const url = baseUrl + "/products";

    const data = JSON.stringify({
        title: title,
        description: description,
        price: price,
        image_url: image,
        featured: featured
    });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.created_at) {
            displayMessage("success", "New product created", ".message-container");
            form.reset();
        }

        if (json.error) {
            displayMessage("error", json.message, ".message-container");
        }

    } catch (error) {
        displayMessage("error", "error", ".message-container");
    }
}