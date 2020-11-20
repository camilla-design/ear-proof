import { baseUrl } from "./settings/baseUrl.js";
import { createProducts } from "./ui/createProducts.js";
import { filterProducts } from "./ui/filterProducts.js";

const productUrl = baseUrl + "products";

(async function() {
    try {
        const response = await fetch(productUrl);
        const json = await response.json();
    
        createProducts(json);
        filterProducts(json);
       
    } catch (error) {
        console.log(error);
    }
})();