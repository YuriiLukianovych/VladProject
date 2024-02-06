const scrollToAnchors = () => {
    const anchors = document.querySelectorAll(".header__nav-link");

    //function for getting the coordinates of an element in the document context
    function getCoords(elem) {
        let box = elem.getBoundingClientRect();

        return {
            top: box.top + window.scrollY,
            right: box.right + window.scrollX,
            bottom: box.bottom + window.scrollY,
            left: box.left + window.scrollX,
        };
    }

    // function for determining the current Y position on the page
    const scrollPosition = () =>
        window.scrollY || document.documentElement.scrollTop;

    for (let anchor of anchors) {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            // отримати значення атрибута href(id секції) посилання, по якому відбувся клік
            // get the value of the href(section id) attribute of the clicked link
            const blockID = anchor.getAttribute("href");
            // отримати достув в DOM до елемента по отриманому id
            // get access to the element in the DOM by the received id
            const ourElem = document.querySelector(blockID);
            if (!ourElem) {
                return;
            }
            // отримати його координати
            // get its coordinates
            const blockIDcoords = getCoords(ourElem);

            window.scrollTo({
                top: blockIDcoords.top,
                behavior: "smooth", // smooth scroll
            });
        });
    }
};

export default scrollToAnchors;
