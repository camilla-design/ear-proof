import { createProducts } from "./createProducts.js";

export function filterProducts(json) {

    const filter = document.querySelector(".filter");

    filter.onkeyup = function() {
        const filterValue = event.target.value.trim().toLowerCase();

        const filterProduct = json.filter(function(product) {
            if(product.title.toLowerCase().startsWith(filterValue)) {
                return true;
            }
        });

        createProducts(filterProduct);
    }
}