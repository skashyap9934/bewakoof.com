const sliderImageArray = [
  "https://images.bewakoof.com/uploads/grid/app/Sale-1x1-Banner-Buy-3-at-1199-1699265959.jpg",
  "https://images.bewakoof.com/uploads/grid/app/Bhupendra-Jogi-1x1-Banner--1--1698998581.jpg",
  "https://images.bewakoof.com/uploads/grid/app/MadDiwali-Sale-1x1-Day02-common-1699253923.jpg",
  "https://images.bewakoof.com/uploads/grid/app/SweatersFlatknits-1x1-sweaters-common-1699022763.jpg",
  "https://images.bewakoof.com/uploads/grid/app/NEW-1x1-SweatsHoodies-70-COMMON-1699005018.jpg",
  "https://images.bewakoof.com/uploads/grid/app/MadDiwali-Sale-1x1-Day02-common-1699253923.jpg",
];
const bewakoofOriginals = [
  "https://images.bewakoof.com/uploads/grid/app/Banner-PC-Size-480x457-1699249580.jpg",
  "https://images.bewakoof.com/uploads/grid/app/Banner-PC-Size-480x457-Heavy-Duty-1699249579.jpg",
  "https://images.bewakoof.com/uploads/grid/app/Banner-PC-Size-480x457-American-PIMA-1699249579.jpg",
  "https://images.bewakoof.com/uploads/grid/app/Banner-PC-Size-480x457-1699249580.jpg",
  "https://images.bewakoof.com/uploads/grid/app/Banner-PC-Size-480x457-American-PIMA-1699249579.jpg",
];
const sliderImg = document.getElementById("slider");
let index = 0;
sliderImage(sliderImageArray, index++);
setInterval(() => {
  sliderImage(sliderImageArray, index++);
  if (index == sliderImageArray.length - 2) index = 0;
}, 2000);
function sliderImage(imageArray, index) {
  let temp = index;
  sliderImg.innerHTML = null;
  for (let i = index; i < imageArray.length; i++) {
    var imageToAppend = document.createElement("img");
    imageToAppend.setAttribute("class", "slide-img");
    imageToAppend.setAttribute("src", imageArray[temp++]);
    sliderImg.append(imageToAppend);
  }
}
const rightSlider = document.getElementById("right-slider");
const leftSlider = document.getElementById("left-slider");
rightSlider.addEventListener("click", () => {
  if (index > 2) index = 0;
  sliderImage(sliderImageArray, ++index);
});
leftSlider.addEventListener("click", () => {
  if (index <= 0) index = 4;
  sliderImage(sliderImageArray, --index);
});

const sliderTwo = document.getElementById("slider-two");
let indexTwo = 0;
sliderTwoImage(bewakoofOriginals, indexTwo++);
setInterval(() => {
  sliderTwoImage(bewakoofOriginals, indexTwo++);
  if (indexTwo == bewakoofOriginals.length - 3) indexTwo = 0;
}, 2000);
function sliderTwoImage(imageArr, index) {
  let temp = indexTwo;
  sliderTwo.innerHTML = null;
  for (let i = indexTwo; i < imageArr.length; i++) {
    const imageToAppend = document.createElement("img");
    imageToAppend.setAttribute("class", "slide-img");
    imageToAppend.setAttribute("src", imageArr[temp++]);
    sliderTwo.append(imageToAppend);
  }
}
const rightSliderTwo = document.getElementById("right-slider-2");
const leftSliderTwo = document.getElementById("left-slider-2");
rightSliderTwo.addEventListener("click", () => {
  if (indexTwo > 1) indexTwo = 0;
  sliderTwoImage(bewakoofOriginals, indexTwo++);
  console.log(indexTwo);
});
leftSliderTwo.addEventListener("click", () => {
  if (indexTwo <= 0) indexTwo = 2;
  sliderTwoImage(bewakoofOriginals, --indexTwo);
});

const loginUser = document.getElementById("login");
const activeUser = JSON.parse(localStorage.getItem("act-user")) || "Login";
loginUser.innerText = activeUser;
if (activeUser == "Login") document.getElementById("logout").innerHTML = null;

document.getElementById("logout").addEventListener("click", () => {
  localStorage.setItem("act-user", JSON.stringify("Login"));
  localStorage.removeItem('total-cost');
  localStorage.removeItem('act-user');
  localStorage.removeItem('wish-list');
  localStorage.removeItem('cart-data');
});
