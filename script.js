function toggleMenu() {
    const menu = document.querySelector(".menu-links") /*targeting menu-links section of index.html */
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}