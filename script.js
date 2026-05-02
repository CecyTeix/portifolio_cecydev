function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

document.addEventListener("click", function(e) {
    const menu = document.getElementById("menu");
    const btn = document.querySelector(".menu-btn");

    if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove("active");
    }
});