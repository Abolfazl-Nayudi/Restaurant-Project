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
