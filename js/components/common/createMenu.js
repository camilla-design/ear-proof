import {
    getUsername
} from "../../utils/storage.js";
import {
    logoutButton
} from "./logoutButton.js";

export function createMenu() {

    const {
        pathname
    } = document.location;

    const container = document.querySelector(".menu-container");

    const username = getUsername();

    let authLink = `<a href="login.html" class="${pathname === "/login.html" || pathname === "/login.html" ? "active" : ""}">login</a>`;

    if (username) {
        authLink = `<button id="logout">Logout ${username}</button>
                    <a href="add.html" class="${pathname === "/add.html" ? "active" : ""}">Add product</a>
                    <a href="admin.html" class="${pathname === "/admin.html" ? "active" : ""}">Edit product</a>`;

    }

    container.innerHTML = `<div class="menu">
                            
                            ${authLink}
                            </div>`

    logoutButton();
}