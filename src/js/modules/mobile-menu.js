const mobileMenu = () => {
    const openBtn = document.querySelector("[data-mobile-menu-open]");
    const closeBtn = document.querySelector("[data-mobile-menu-close]");
    const mobileMenu = document.querySelector(".header__nav");
    const mobileMenuLinks = document.querySelectorAll(".header__nav-link");
    const bodyh = document.body;

    openBtn.addEventListener("click", openMenu);

    closeBtn.addEventListener("click", closeMenu);

    mobileMenuLinks.forEach((btn) => {
        btn.addEventListener("click", closeMenu);
    });

    function openMenu() {
        openBtn.classList.add("btn-hidden");
        closeBtn.classList.remove("btn-hidden");
        mobileMenu.classList.add("visible");
        bodyh.classList.add("is-blocked");
    }
    function closeMenu() {
        closeBtn.classList.add("btn-hidden");
        openBtn.classList.remove("btn-hidden");
        mobileMenu.classList.remove("visible");
        bodyh.classList.remove("is-blocked");
    }
};

export default mobileMenu;
