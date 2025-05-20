const hamburgerMenu = document.querySelector(".hamburger-icon");
const openMenu = document.querySelector(".right-side-menu");
const closeMenu = document.querySelector(".close");
console.log(openMenu);

// opening hamburger menu
hamburgerMenu.addEventListener("click", (e) => {
  openMenu.classList.add("open");
  // document.body.style.overflowY = "hidden";
});

// closing hamburger menu
closeMenu.addEventListener("click", (e) => {
  openMenu.classList.remove("open");

  // document.body.style.overflowY = "scroll";
});

// make the counter under about section

const valueOfNumber = document.querySelectorAll(".counter .num");
let interval = 5000;
console.log(valueOfNumber);

valueOfNumber.forEach((number) => {
  let startValue = 0;
  let endValue = parseInt(number.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  // console.log(endValue);

  let counter = setInterval(() => {
    startValue++;
    number.textContent = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
});

const navbar = document.querySelector(".parent-nav");
console.log(navbar);
if (window.scrollY === 600) {
  navbar.style.position = "fixed";
}

console.log(window.scrollY);
