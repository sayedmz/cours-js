function x() {
  console.log("function html");
}

//onclinck for js

//----------------
let btn = document.getElementById("btn");
btn.onclick = function () {
  console.log("function js");
};

//----------------
let btn1 = document.getElementById("btn1");
btn1.onclick = () => {
  console.log("function js1");
};

//----------------
let btn2 = document.getElementById("btn2");
function x2() {
  console.log("function x2");
}
btn2.onclick = x2;

//----------------
let btn3 = document.getElementById("btn3");
btn3.onclick = () => {
  document.body.style.background = "red";
};
//----------------
//2eme methode for onclick
//addEventListener   لا تسمح لنا بالخطا - تنفذ عدة اوامر
let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function () {
  console.log("2eme methode");
}); //word is click inportent

// لتنفذ عدة  اوامر بضغطة واحدة

let btn5 = document.getElementById("btn5");
//1ere
btn5.addEventListener("click", function () {
  document.body.style.background = "yellow";
});
//2eme
btn5.addEventListener("click", function () {
  btn5.style.color = "blue";
});
//3eme
btn5.addEventListener("click", function () {
  btn5.style.background = "#e22";
  btn5.style.width = "200px";
  btn5.style.borderRadius = "12px";
});
//4eme
btn5.addEventListener("click", function () {
  console.log("4eme ");
});
//==============================
let btn6 = document.getElementById("btn6");

btn6.onclick = function () {
  let newp = btn6.cloneNode(true);
  newp.className = "clone";

  document.body.appendChild(newp);
};

// let cloned = document.querySelector(".clone");//error

// cloned.onclick = function () {
//   console.log("iam cloned");
// };
//true
document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("iam cloned");
  }
});
