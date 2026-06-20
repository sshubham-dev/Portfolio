const open_button = document.getElementById("mobile-menu-open")
const close_button = document.getElementById("mobile-menu-close")
const menu = document.getElementById("mobile-menu")
const overlay = document.getElementById("mobile-menu-overlay")
// console.log(open_button)
// console.log(close_button)
// console.log(menu)
// console.log(overlay)

open_button.addEventListener("click", () => {
    console.log("open menu")
    menu.classList.remove("hidden")
});

close_button.addEventListener("click", () => {
    console.log("close menu")
    menu.classList.add("hidden")
});
