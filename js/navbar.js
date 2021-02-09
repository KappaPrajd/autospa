const navbar = document.querySelector("nav");
const main = document.querySelector("main");
const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-link");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

//place content under the fixed navbar
const placeContent = () => {
  main.style.paddingTop = `${navbar.offsetHeight}px`;
};

document.addEventListener("load", placeContent());
window.onresize = placeContent;
