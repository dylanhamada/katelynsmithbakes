const menuButton = document.querySelector(".nav-mobile-menu");
const mobileMenu = document.querySelector(".nav-responsive");
let closeButton = false;

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");

  if (closeButton === false) {
    menuButton.classList.remove("menu-open");
    menuButton.classList.add("menu-closed")
    closeButton = true;
  } else {
    menuButton.classList.remove("menu-closed")
    menuButton.classList.add("menu-open");
    closeButton = false;
  }
});
