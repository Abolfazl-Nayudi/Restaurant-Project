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

const key = "96lBuJ_i9p6iLiTZglcQMBokDgl-_i1klr4HHSmkBHU";

// get some image for instagram in footer section

const imgForInsta = document.querySelector(".img-insta");
const firstPart = document.querySelector(".img-insta .first");
const secondPart = document.querySelector(".img-insta .second");

console.log();
const getImgForInsta = async () => {
  const api = "https://api.unsplash.com/search/photos";
  const keyAccess = `&client_id=${key}`;
  const param = `?query=food-image-for-instagram&orientation=portrait&page=10`;

  const response = await axios.get(api + param + keyAccess);

  const data = response.data.results;
  const ImgForFirstPart = [...data.slice(0, 2), ...data.slice(6, 7)];
  const ImgForSecondPart = [...data.slice(7, 10)];

  // this loop render first three imgs in first div in div.img-insta
  ImgForFirstPart.forEach((ele) => {
    const html = `<a href="#"><img src="${ele.urls.small}"></a>`;

    firstPart.innerHTML += html;
  });

  // this loop render second three imgs in second div in div.img-insta
  ImgForSecondPart.forEach((ele) => {
    const html = `<a href="#"><img src="${ele.urls.small}"></a>`;

    secondPart.innerHTML += html;
  });
};

getImgForInsta();
