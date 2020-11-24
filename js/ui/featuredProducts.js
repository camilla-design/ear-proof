export function featuredProducts(json) {
    const featuredContainer = document.querySelector(".featured-products-container");
    const featuredHeadline = document.querySelector(".featured-products-headline");


    let featured = "";


    for (let i = 0; i < json.length; i++) {

        if (json[i].featured === true){
            featured += `
            <img src="./strapi-api-folder/public${json[i].image.url}" />
            <h3>${json[i].title}</h3>
            <h4>$ ${json[i].price}</h4>
            
            `;

            featuredHeadline.style.display = "block";
        } 
            

    }

    featuredContainer.innerHTML = featured;
    };