export function getHeroImage(img) {
    const heroImage = document.querySelector(".hero-image");

    heroImage.innerHTML = `<img src="./strapi-api-folder/public${img.hero_banner.url}" />`;
}