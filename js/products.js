import {
    baseUrl
} from "./settings/baseUrl.js";
import {
    createProducts
} from "./ui/createProducts.js";
import {
    filterProducts
} from "./ui/filterProducts.js";
import {
    displayMessage
} from "./components/common/displayMessage.js";

const productUrl = baseUrl + "/products/";

(async function () {
    try {
        const response = await fetch(productUrl);
        const json = await response.json();

        createProducts(json);
        filterProducts(json);

    } catch (error) {
        displayMessage("error", error, ".message-container");
    }
})();