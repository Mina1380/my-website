"use strict";

let cartcount = 0;
const div = document.querySelector(".cart");

const buttons = document.querySelectorAll(".buy-btn");
const cartcountr = document.querySelector("#cart-count");

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



// const text= document.getElementById('count');
// const btn = document.getElementById("likeBtn");
// let liked = false;
// let numberOfLikes = 0;
// const array2 = ["😍", "🍷", "👎", "💥"];

// btn.addEventListener("click", function () {
//   if (liked === false) {
//     for ( let i = 0; i < array2.length; i++) {
//         console.log(i);
//       numberOfLikes = 1;
//       btn.style.backgroundColor = "red";
//       text.textContent = ` Liked ${array2[i]}`;
//     }
//   } else {
//     numberOfLikes = 0;
//     text.textContent = " 0 Likes";
//   }
// });

//  input list button
// const list = document.getElementById("list");
// const inpu = document.getElementById("inp");
// const btn = document.getElementById("addbtn");

// btn.addEventListener("click", function () {
//   let liitem = document.createElement("li");
//   list.appendChild(liitem);
//   let btn = document.createElement("button");
//   inpu.appendChild(btn);
//   btn.textContent = "x";
//   liitem.textContent = inpu.value;
// });

//  ************* Showing array to html webpage***************
// const fruits = ["Apple", "Banana", "Orange"];
// fruits.forEach(item => {
//     const listItem= document.createElement('li');
//     listItem.textContent= item;
//     list.appendChild(listItem);
// });

// let count = document.getElementById("count");
// const add = document.getElementById("add-btn");
// let newnum = 0;
// add.addEventListener("click", function () {
//   newnum++;

//   count.textContent = newnum;
//   if (newnum == 20) {
//     count.textContent = " You win";
//   }
//   //    return;
// });

//  +++++++++++++++++++Body background color changer+++++++++++++++++++

// const body = document.querySelector("body");

// function backgroundColor(color) {
//   const button = document.createElement("button");
//   button.textContent = "Red";
//   button.className = "Color-btn";
//   button.style.backgroundColor = 'red';
//   button.addEventListener("click", function () {
//     body.classList.add("body1");
//   });
//   const button1 = document.createElement("button");
//   button1.textContent = "black";
//   button1.className = "Color-btn";
//   button1.style.backgroundColor = 'green';

//   button1.addEventListener("click", function () {
//     body.classList.add("body2");
//   });
//   body.appendChild(button);
//   body.appendChild(button1);
// }
// backgroundColor();

// function reset() {
//   const resetBtn = document.createElement("button");
//   resetBtn.textContent = "reset";
//   resetBtn.className = "Color-btn";

//   resetBtn.addEventListener("click", function () {
//     body.classList.remove("body1");
//     body.classList.remove("body2");
//   });
//   body.appendChild(resetBtn);
// }
// reset();

//  To DoList For Me
// const newItemInput = document.querySelector("#newItemInput");
// const addBtn = document.querySelector("#addBtn");
// const myList = document.querySelector("#myList");

// function creatListItem(itemText) {
//   const li = document.createElement("li");
//   li.textContent = itemText;

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";
//   deleteBtn.className = "delete-btn";
//   deleteBtn.addEventListener("click", function () {
//     li.remove();
//   });

//   li.appendChild(deleteBtn);
//   myList.appendChild(li);
// }

// addBtn.addEventListener("click", function () {
//   const newItemText = newItemInput.value.trim();

//   if (newItemText !== "") {
//     creatListItem(newItemText);

//     newItemInput.value = "";
//     newItemInput.focus();
//   } else {
//     alert("Please enter new item");
//   }
// });

//  ************ Score Number *****************
// const button = document.querySelector(".button");
// const para = document.querySelector(".para");

// let newScore=0;
// button.addEventListener("click", function () {
//   newScore+= 5;
//   para.textContent = newScore;
//   if(newScore >= 25){
//     para.textContent = ' You Win Bro '
//   }
// });

//  ************ Making lots of Buttons with JS****************
// const container = document.querySelector('.container') ;
// for (let i= 1; i <6; i++){
//   const newBTN = document.createElement('button');
//   newBTN.textContent= `Button ${i}`
//   container.appendChild(newBTN);
//   newBTN.addEventListener('click', function(){
//     console.log(`Button ${i} clicked`);
//   })
// }

//  .................Loging numbers to consol if it is graeter the 10..............................
// const numbers = [22,3,4,5,7,8,19,12,32,18,4]

// for(let i= 0; i< numbers.length; i++){
//   const num= numbers[i];
//   if(num > 10){
//     console.log(' this number is graeter then '+ num);
//   }
// }

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,, Converting to Appercase,,,,,,,,,,,,,,,,,,,

// const names = ["mina", "barati"];
// function convert(item) {
//   for (let i = 0; i < item.length; i++) {
//    const newName=  item[i].toLocaleUpperCase();
//   //  console.log(i);
//    console.log(newName);
//   }

// }
// convert( ["mina", "barati"]);

// .............. making list with forEach and Dom..............
// const container = document.querySelector('.container') ;

// const fruits =[1,2,3,4,5];

// // fruits.forEach((item) => {
//    for (let i= 1; i < fruits.length; i+=2){
//     const li =document.createElement('li');
//     li.textContent = fruits[i];
//     container.appendChild(li);
//    }
// // })

// ....................... Sum of array numbers....................

// const numbers = [1, 2, 3, 4, 5, 6, 7,8,9,10];
// let sumNumbers = 0;

// function result(m) {
//   for (let i = 0; i < numbers.length; i++) {
//     sumNumbers += numbers[i];
//   }
//   return sumNumbers;
// }
// // result(numbers);
// // const resultof9 = result(numbers);
// console.log(result(numbers));

//  Sum of 1-n with Function
// function sumUptoN(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// let resultFor = sumUptoN(40);
// console.log(resultFor);

/////////////////////////////  Sum of 1-10 with while

// let sum = 0;
// let counter = 1;

// while (counter <= 10) {
//     sum += counter;
//     counter += 1;
// }

// console.log(sum);

//////////////////////  Sum of 1-10  with for

// let num = 0;

// for (let i = 0; i <= 10; i++) {
//   num +=i;
// }

// console.log(num);

// // ///////////////////// const names = document.querySelector(".names");

// const arrayname = ["Ali", "Naim", "Fatima", "Nargis", "Kimiya"];
// const container = document.getElementById("names");

// for (let i = 0; i < arrayname.length; i++) {
//   const p = document.createElement("p");
//   p.textContent = arrayname[i];
//   // console.log();
//   container.appendChild(p);
// }

// const p = document.createElement("p");
// p.textContent = "mina";
// container.appendChild(p);

// arrayname.forEach((item) => {
//   console.log(item);
//   const h1 = document.createElement("h1");
//   h1.textContent = item;
//   container.appendChild(h1);
// });
