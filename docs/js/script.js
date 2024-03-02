function toggleTab() {
    let tabButtonChar = document.querySelector('#char');
    let tabButtonDocs = document.querySelector('#docs');
    let charText = document.querySelector('[data-id="char"]');
    let docsText = document.querySelector('[data-id="docs"]');

    tabButtonDocs.classList.toggle("active");
    tabButtonChar.classList.toggle("active");
    docsText.classList.toggle("active");
    charText.classList.toggle("active");
}

function mobileMenu() {
    let mobileMenu = document.querySelector("#mobile-menu");

    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
}