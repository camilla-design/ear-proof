import {
    clearUserStorage
} from "../../utils/storage.js";

export function logoutButton() {

    const logoutbtn = document.querySelector("#logout");

    if (logoutbtn) {
        logoutbtn.onclick = function () {
            const doLogout = confirm("Are you sure you want to logout?");

            if (doLogout) {
                clearUserStorage();
                location.href = "/login.html";
            }
        }
    }
}