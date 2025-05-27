const hamburgerMenu = document.querySelector(".hamburger-icon");
const openMenu = document.querySelector(".right-side-menu");
const closeMenu = document.querySelector(".close");

const foodImgBanner = document.querySelector(".food-img-banner");
// for less that 700px width of screen
const foodImgBannerRes = document.querySelector(".food-img-banner-res");

const key = "96lBuJ_i9p6iLiTZglcQMBokDgl-_i1klr4HHSmkBHU";

const getImg = async () => {
  const api = "https://api.unsplash.com/search/photos";
  const keyAccess = `&client_id=${key}`;
  const param = `?query=dish-of-food&orientation=landscape&page=4`;

  const response = await axios.get(api + param + keyAccess);

  const data = response.data.results;

  let arrOfLinkImg = data.slice(0, 4);

  makeImgInHeader(arrOfLinkImg);
  makeCircledImg700Px(arrOfLinkImg);
};

getImg();

// this function make the four images in the header
function makeImgInHeader(item) {
  item.forEach((ele) => {
    const html = `
          <div class="content-box">
            <img src="${ele.urls.regular}" alt="" />
            <h4>Lorem ipsum dolor</h4>
            <p>Lorem ipsum dolor</p>
          </div>
        `;
    foodImgBanner.innerHTML += html;
  });
}

function makeCircledImg700Px(item) {
  item.forEach((ele) => {
    const html = `
          <div class="content-box">
            <img src="${ele.urls.regular}" alt="" />
            <h4>Lorem ipsum dolor</h4>
            <p>Lorem ipsum dolor</p>
          </div>
        `;
    foodImgBannerRes.innerHTML += html;
  });
}

// two picture about chef cooking and i will put it under the header

const ImageInAboutInfo = document.querySelector(".about-info .image");

const getChefImages = async () => {
  const api = "https://api.unsplash.com/search/photos";
  const keyAccess = `&client_id=${key}`;
  const param = `?query=chef&orientation=portrait&page=10`;

  const response = await axios.get(api + param + keyAccess);

  const data = response.data.results;
  const arrOfLinkImg = [data[5], data[0]];

  // let arrOfLinkImg = data.slice(5, 7);
  console.log(arrOfLinkImg);
  arrOfLinkImg.forEach((ele) => {
    const html = `<img src="${ele.urls.small}">`;
    ImageInAboutInfo.innerHTML += html;
  });
};

getChefImages();

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
