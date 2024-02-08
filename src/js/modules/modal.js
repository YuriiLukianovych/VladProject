const modalWindow = () => {
    const openBtns = document.querySelectorAll("[data-modal-open]");
    const closeBtn = document.querySelector("[data-modal-close]");
    const modal = document.querySelector("[data-modal]");
    const bodyh = document.body;

    openBtns.forEach((btn) => {
        btn.addEventListener("click", openModal);
    });

    closeBtn.addEventListener("click", closeModal);

    function openModal() {
        modal.classList.toggle("is-hidden");
        bodyh.classList.toggle("is-blocked");

        window.addEventListener("keydown", esc);
        window.addEventListener("click", clickOnBackdrop);
    }

    function closeModal() {
        modal.classList.toggle("is-hidden");
        bodyh.classList.toggle("is-blocked");

        window.removeEventListener("keydown", esc);
        window.removeEventListener("click", clickOnBackdrop);
    }

    function esc(e) {
        if (e.code === "Escape") {
            closeModal();
        }
    }

    function clickOnBackdrop(e) {
        if (e.target.classList.contains("backdrop")) {
            closeModal();
        }
    }
};

export default modalWindow;
