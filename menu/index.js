const breakfastImg = document.querySelectorAll(".parent-img.breakfast");
console.log(breakfastImg);

const key = "96lBuJ_i9p6iLiTZglcQMBokDgl-_i1klr4HHSmkBHU";

const getBreakfastImg = async () => {
  const api = "https://api.unsplash.com/search/photos";
  const keyAccess = `&client_id=${key}`;
  const param = `?query=breakfast&orientation=landscape&page=5`;

  const response = await axios.get(api + param + keyAccess);

  const data = response.data.results;

  const arrOfLinkBreakfast = [
    ...data.slice(0, 5),
    ...data.slice(6, 8),
    ...data.slice(9),
  ];
  arrOfLinkBreakfast.forEach((ele) => {
    let html = `<img src="${ele.urls.small}">`;
    breakfastImg.innerHTML += html;
  });
};

getBreakfastImg();
