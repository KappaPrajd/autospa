const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const html = document.querySelector(".html");

window.addEventListener("scroll", () => {
  if (window.innerWidth > 1400) {
    header.classList.toggle("sticky", window.scrollY > 0);
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 1400) {
    header.classList.remove("sticky");
  }
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  header.classList.toggle("active");
  html.classList.toggle("hide");
});
