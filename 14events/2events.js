let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn41 = document.getElementById("btn41");
let btn5 = document.getElementById("btn5");

//onclick يجب الضغط والتحرير على العنصر حتى يعمل
btn.onclick = function () {
  document.body.style.background = "yellow";
};

//onmouseup  عند الضغط خارج العنصر وتحرير فوق العنصر يعمل
btn1.onmouseup = function () {
  document.body.style.background = "red";
};

//onmousedown  نعمل عند الضغط فوق العنصر قبل تحرير
btn2.onmousedown = function () {
  document.body.style.background = "blue";
};
//onmouseover تعمل عند تمرير الموس فوق العنصر بدون ضغط
btn3.onmouseover = function () {
  document.body.style.background = "green";
};
// onmouseout  تعمل عندما نخرج من فوق العنصر بدون ضغط
btn4.onmouseout = function () {
  document.body.style.background = "black";
};
//onmouseenter تعمل عند تمرير الموس فوق العنصر بدون ضغط
btn41.onmouseenter = function () {
  document.body.style.background = "violet";
};
//onmousemove تعمل عند المرور فوق العنصر وترصد جميع تحركات الموس فوق العنصر
btn5.onmousemove = function () {
  console.log("hello");
};
//  طباعة السكرول
window.onscroll = function () {
  console.log("scroll"); // تسجيل تحركات السكرول
};
//-----------------------------------------------------
//-----------------------------------------------------
let i = 1;
let inp = document.getElementById("inp");
let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let inp3 = document.getElementById("inp3");
let inp4 = document.getElementById("inp4");
let inp5 = document.getElementById("inp5");
let inp6 = document.getElementById("inp6");

//onkeyup ينفذ عند الضغط والتحرير
inp.onkeyup = function () {
  console.log("hello" + i++);
};
//-------------------
//onkeydown يعمل عند الضغط فورا
inp1.onkeydown = function () {
  console.log("how are you" + i++);
};
//---------------------
//onfocus عند الغضط فوق العنصر يتم التنفيذ
inp2.onfocus = function () {
  this.style.background = "red";
};
//onblur يعمل عند الخروج من فوق العنصر
inp3.onblur = function () {
  this.style.background = "yellow";
};
//------------------------------------------------
//onload  يتم تنفيذ الامر عند تحميل الصفحة
window.onload = function () {
  document.body.style.background = "orange";
};
//onresize تعمل عند تغيير حجم الشاشة
window.onresize = function () {
  document.body.style.background = "white";
};
//onsubmit
