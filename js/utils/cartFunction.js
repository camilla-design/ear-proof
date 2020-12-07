export function getExistingProduct() {
    const carts = localStorage.getItem("cart");

    console.log(carts);

    if (carts === null) {
        return [];
    } else {
        return JSON.parse(carts);
    }
}