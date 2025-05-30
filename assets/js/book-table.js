const timeBox = document.querySelector(".time-box");
const reserveTimes = document.querySelector(".time-list-select");

let arrayOfTimes = [
  "12:00am",
  "12:30am",
  "1:00am",
  "1:30am",
  "2:00am",
  "2:30am",
  "3:00am",
  "3:30am",
  "4:00am",
  "4:30am",
  "5:00am",
  "5:30am",
  "6:00am",
  "6:30am",
  "7:00am",
  "7:30am",
  "8:00am",
  "8:30am",
  "9:00am",
  "9:30am",
  "10:00am",
  "10:30am",
  "11:00am",
  "11:30am",
  "12:00pm",
  "12:30pm",
  "1:00pm",
  "1:30pm",
  "2:00pm",
  "2:30pm",
  "3:00pm",
  "3:30pm",
  "4:00pm",
  "4:30pm",
  "5:00pm",
  "5:30pm",
  "6:00pm",
  "6:30pm",
  "7:00pm",
  "7:30pm",
  "8:00pm",
  "8:30pm",
  "9:00pm",
  "9:30pm",
  "10:00pm",
  "10:30pm",
  "11:00pm",
  "11:30pm",
];
const makeTimes = () => {
  arrayOfTimes.forEach((ele) => {
    const html = `
    <li  class="dropdown-item">${ele}</li>
    `;
    reserveTimes.innerHTML += html;
  });
};

makeTimes();

// show the list time on screen
timeBox.addEventListener("click", (e) => {
  reserveTimes.style.display = "flex";
});

// hidden the list time from screen when i clicked somewhere that isn't input.time-box
window.addEventListener("click", (e) => {
  //   console.log(e.target.classList.contains("time-box"));
  if (e.target.classList.contains("time-box") === false) {
    reserveTimes.style.display = "none";
  }
});

reserveTimes.addEventListener("click", (e) => {
  timeBox.value = e.target.textContent;
});
