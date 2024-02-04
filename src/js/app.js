import * as helpFunctions from "./modules/functions.js";

helpFunctions.isWebp();

const form = document.querySelector(".contact-us__form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#form-name").value;
    const phone = form.querySelector("#form-phone").value;
    const message = form.querySelector("#form-textarea").value;

    const res_message = `Ім'я: ${name}%0AНомер: ${phone}%0AПовідомлення: ${message}`;

    const token = "6500254603:AAElY-Vf796qx9FmZCPHAdmD3ffnm20rN6o";
    const chat_id = -4190749445;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${res_message}/`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    console.log("Successfully sended!");
});
