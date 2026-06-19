"use strict";

let cartcount = 0;
const div = document.querySelector(".cart");

const buttons = document.querySelectorAll(".buy-btn");
const cartcountr = document.querySelector("#cart-count");
const mode = document.querySelector(".mode");
const body = document.querySelector(".body");
const footer = document.querySelector(".footer");
const card = document.querySelectorAll(".card");

mode.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  footer.classList.toggle("footer-dark");
  card.forEach((card) => {
    card.classList.toggle("card-dark");
  });
  mode.classList.toggle("dark-mode1");
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    cartcount++;
    cartcountr.textContent = cartcount;
  });
});

const images1 = [
  "images/کت و دامن طوسی 2.jpg",
  "images/کت و دامن طوسی.jpg",
  "images/کت و دامن طوسی 3.jpg",
];

let index = 0;
function next() {
  index++;
  if (index >= images1.length) index = 0;

  document.getElementById("product").src = images1[index];
}

function prev() {
  index--;
  if (index < 0) index = images1.length - 1;

  document.getElementById("product").src = images1[index];
}
