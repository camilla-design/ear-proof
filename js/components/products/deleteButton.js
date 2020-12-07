import {
    baseUrl
} from "../../settings/baseUrl.js";
import {
    getToken
} from "../../utils/storage.js";
import {
    displayMessage
} from "../common/displayMessage.js";

export default function deleteButton(id) {
    const deleteContainer = document.querySelector(".delete-product-container");

    deleteContainer.innerHTML = `<button type="button" class="detete-button">Delete Product</button>`;

    const deletebtn = document.querySelector("button.detete-button");

    deletebtn.onclick = async function () {
        console.log(id);
        const doDelete = confirm("Are you sure you want to delete this product?");

        if (doDelete) {
            const productUrl = baseUrl + "/products/" + id;

            const token = getToken();

            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const response = await fetch(productUrl, options);
                const json = await response.json();
                
                location.href = "admin.html";
                console.log(json);

            } catch (error) {
                displayMessage("error", error, ".message-container");
            }
        }
    }
}