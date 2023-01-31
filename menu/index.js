const breakfastImg = document.querySelectorAll(".parent-img.breakfast");

const apiKey = "96lBuJ_i9p6iLiTZglcQMBokDgl-_i1klr4HHSmkBHU";

// ==========================================
//                 breakfast
const getBreakfastImg = async () => {
  const api = "https://api.unsplash.com/search/photos";
  const keyAccess = `&client_id=${apiKey}`;
  const param = `?query=breakfast&orientation=landscape&page=5`;

  const response = await axios.get(api + param + keyAccess);

  const data = response.data.results;
  console.log(data);
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
