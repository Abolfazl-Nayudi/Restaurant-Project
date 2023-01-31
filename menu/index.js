const breakfastImg = document.querySelectorAll(".parent-img.breakfast");
const lunchImg = document.querySelectorAll(".parent-img.lunch");
const dinnerImg = document.querySelectorAll(".parent-img.dinner");
const juiceImg = document.querySelectorAll(".parent-img.juice");
const dessertImg = document.querySelectorAll(".parent-img.dessert");
console.log(lunchImg);
const apiKey = "96lBuJ_i9p6iLiTZglcQMBokDgl-_i1klr4HHSmkBHU";

// ==========================================
//                 breakfast
// ==========================================
const getBreakfastImg = async () => {
  const api = "https://api.unsplash.com/search/photos";
  const keyAccess = `&client_id=${apiKey}`;
  const param = `?query=breakfast&orientation=landscape&page=5`;

  const response = await axios.get(api + param + keyAccess);
  const data = response.data.results;

  const arrOfLinkBreakfast = [
    ...data.slice(0, 5),
    ...data.slice(6, 8),
    ...data.slice(9),
  ];

  arrOfLinkBreakfast.forEach((ele, index) => {
    let html = `<img src="${ele.urls.small}">`;
    breakfastImg[index].innerHTML += html;
  });
};

getBreakfastImg();

// ==========================================
//                 lunch
// ==========================================

const getLunchImg = async () => {
  const api = "https://api.unsplash.com/search/photos";
  const keyAccess = `&client_id=${apiKey}`;
  const param = `?query=lunch-dish&orientation=landscape&page=15`;

  const response = await axios.get(api + param + keyAccess);
  const data = response.data.results;

  const arrOfLinkLunch = [...data.slice(0, 7), ...data.slice(9)];

  arrOfLinkLunch.forEach((ele, index) => {
    let html = `<img src="${ele.urls.small}">`;
    lunchImg[index].innerHTML += html;
  });
};

getLunchImg();

// ==========================================
//              dinner
// ==========================================

const getDinnerImg = async () => {
  const api = "https://api.unsplash.com/search/photos";
  const keyAccess = `&client_id=${apiKey}`;
  const param = `?query=dinner-dish&orientation=landscape&page=2`;

  const response = await axios.get(api + param + keyAccess);
  const data = response.data.results;

  const arrOfLinkDinner = [...data.slice(1, 8), ...data.slice(9)];

  arrOfLinkDinner.forEach((ele, index) => {
    let html = `<img src="${ele.urls.small}">`;
    dinnerImg[index].innerHTML += html;
  });
};

getDinnerImg();

// ==========================================
//              juice
// ==========================================

const getJuiceImg = async () => {
  const api = "https://api.unsplash.com/search/photos";
  const keyAccess = `&client_id=${apiKey}`;
  const param = `?query=juice&orientation=landscape&page=2`;

  const response = await axios.get(api + param + keyAccess);
  const data = response.data.results;

  const arrOfLinkDinner = [...data.slice(0, 2), ...data.slice(3, 9)];

  arrOfLinkDinner.forEach((ele, index) => {
    let html = `<img src="${ele.urls.small}">`;
    juiceImg[index].innerHTML += html;
  });
};

getJuiceImg();

// ==========================================
//              dessert
// ==========================================

const getDessertImg = async () => {
  const api = "https://api.unsplash.com/search/photos";
  const keyAccess = `&client_id=${apiKey}`;
  const param = `?query=dessert&orientation=landscape&page=4`;

  const response = await axios.get(api + param + keyAccess);

  const data = response.data.results;

  const arrOfLinkDessert = [
    ...data.slice(0, 3),
    ...data.slice(4, 5),
    ...data.slice(6),
  ];
  arrOfLinkDessert.forEach((ele, index) => {
    let html = `<img src="${ele.urls.small}">`;
    dessertImg[index].innerHTML += html;
  });
};

getDessertImg();
