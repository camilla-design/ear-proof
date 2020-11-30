import { getUsername } from "../../utils/storage.js";

export function createMenu() {

    const { pathname } = document.location;

    const container = document.querySelector(".menu-container");

    const username = getUsername();

    let authLink = `<a href="admin.html" class="${pathname === "/admin.html" || pathname === "/admin.html" ? "active" : ""}">Home</a>`;

    if (username) {
        authLink = `<a href="add.html" class="${pathname === "/add.html" ? "active" : ""}">Add product</a>
                    <span>Welcome, ${username}!</span>`;
    }

    container.innerHTML = `<div class="menu">
                            
                            ${authLink}
                            </div>`
}