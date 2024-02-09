const menuButton = document.querySelector(".nav-mobile-menu");
const mobileMenu = document.querySelector(".nav-responsive");

menuButton.addEventListener("click", () => {
  const computedStyle = window.getComputedStyle(mobileMenu);
  const newImagePath = "{{ site.baseurl }}/assets/icons/";
  let closeButton = false;

  if (computedStyle.display === "none") {
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }

  if (closeButton === false) {
    menuButton.src = `${newImagePath}x-lg.svg`;
    !closeButton;
  } else {
    menuButton.src = `${newImagePath}list.svg`;
    !closeButton;
  }
});
