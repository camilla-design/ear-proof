
export function getHeroImage(img) {
    const heroImage = document.querySelector(".hero-image");
    const heroImage2 = document.querySelector(".hero-image-bigger-screen");
   
    heroImage.innerHTML = `<img src="${img.hero_banner.url}" />`;
    heroImage2.innerHTML = `<img src="${img.hero_banner.url}" />`;
}