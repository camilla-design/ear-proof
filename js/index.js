import { baseUrl } from "./settings/baseUrl.js";
import { getHeroImage } from "./ui/getHeroImage.js";
import { featuredProducts } from "./ui/featuredProducts.js";
import { newProducts } from "./ui/newProducts.js";

const homeUrl = baseUrl + "home";
const productUrl = baseUrl + "products";

(async function() {
    try {
        const response = await fetch(homeUrl);
        const img = await response.json();
    
        console.log(img);
        getHeroImage(img);
       
    } catch (error) {
        console.log(error);
    }
})();

(async function() {
    try {
        const response = await fetch(productUrl);
        const json = await response.json();
    
        newProducts(json);
        featuredProducts(json);
        
       
    } catch (error) {
        console.log(error);
    }
})();