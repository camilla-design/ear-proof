export function getExistingProduct() {
    const carts = localStorage.getItem("cart");

    if (carts === null) {
        return [];
    } else {
        return JSON.parse(carts);
    }
}