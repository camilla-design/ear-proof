import {
    clearStorage
} from "../../utils/storage.js";

export function logoutButton() {

    const logoutbtn = document.querySelector("#logout");

    if (logoutbtn) {
        logoutbtn.onclick = function () {
            const doLogout = confirm("Are you sure you want to logout?");

            if (doLogout) {
                clearStorage();
                location.href = "/login.html";
            }
        }
    }
}