import IMask from "imask";

const formFoo = () => {
    const form = document.querySelector(".contact-us__form");
    const name = form.querySelector("#form-name");
    const phone = form.querySelector("#form-phone");
    const message = form.querySelector("#form-textarea");
    const errorBox = document.querySelector(".form__error");

    const maskOptions = {
        mask: "+{38}(000)000-00-00",
    };

    const phoneMask = IMask(phone, maskOptions);

    form.addEventListener(
        "submit",
        _.throttle((e) => {
            e.preventDefault();

            const res_message = `Ім'я: ${name.value}%0AНомер: ${phone.value}%0AПовідомлення: ${message.value}`;

            const token = "6500254603:AAElY-Vf796qx9FmZCPHAdmD3ffnm20rN6o";
            const chat_id = -4190749445;
            const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${res_message}`;

            const numLength = phoneMask.unmaskedValue.length;
            const containsZero =
                phoneMask.unmaskedValue[2] === "0" ? true : false;

            if (numLength < 12 || !containsZero) {
                errorBox.classList.add("show");
                setTimeout(() => {
                    errorBox.classList.remove("show");
                }, 2000);
                return;
            }

            async function sendMessage(url_address) {
                return await fetch(url_address).then((response) => {
                    if (!response.ok) {
                        throw new Error(response.status);
                    }
                    return response.json();
                });
            }

            sendMessage(url)
                .then(() => {
                    form.reset();
                })
                .catch((error) => console.log(error));
        }, 1000)
    );
};

export default formFoo;
