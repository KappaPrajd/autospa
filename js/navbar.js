const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const navItems = [...document.getElementsByClassName("nav-li")];

const clearClasses = () => {
  hamburger.classList.remove("active");
  header.classList.remove("active");
};

//sticky navbar
window.addEventListener("scroll", () => {
  if (window.innerWidth > 1400) {
    header.classList.toggle("sticky", window.scrollY > 0);
  }
});

//fixing bugs occuring during transitions between css breakpoints
window.addEventListener("resize", () => {
  if (window.innerWidth <= 1400) {
    header.classList.remove("sticky");
  } else {
    clearClasses();
  }
});

//hamburger and header transformation
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  header.classList.toggle("active");
});

navItems.forEach((el) => el.addEventListener("click", clearClasses));
