import * as helpFunctions from "./modules/functions.js";

helpFunctions.isWebp();

const form = document.querySelector(".contact-us__form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#form-name");
    const phone = form.querySelector("#form-phone");
    const message = form.querySelector("#form-textarea");

    const res_message = `Ім'я: ${name.value}%0AНомер: ${phone.value}%0AПовідомлення: ${message.value}`;

    const token = "6500254603:AAElY-Vf796qx9FmZCPHAdmD3ffnm20rN6o";
    const chat_id = -4190749445;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${res_message}`;

    async function fetchUsers(url_address) {
        return await fetch(url_address).then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
    }

    fetchUsers(url)
        .then(() => {
            console.log("Successfully sended!");
            // Очищення значень полів форми
            name.value = "";
            phone.value = "";
            message.value = "";
        })
        .catch((error) => console.log(error));
});
