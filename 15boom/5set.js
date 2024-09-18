//settimeout && setinterval

// setTimeout  لتشغيل الفوكشن بعد فترة زمنية معينة

// setTimeout(function(){},1000) 1000 = one seconde
// لشتغيل الكود مرة واحدة فقط

setTimeout(function () {
  console.log("Hello World");
}, 3000); //1000 = one seconde

//----------------------------------------------------------

let x = setTimeout(function () {
  console.log("how are tou");
}, 3000);

//لتوقيف الفوكشن قبل تنفيذها او قبل وقت معين

clearTimeout(x);

setTimeout(saymsg, 5000);
function saymsg() {
  console.log("msggggggg");
}

//----------------------------------------------------------

setTimeout(saymsg1, 6000, "zak", "26");

function saymsg1(user, age) {
  console.log(`iam message for ${user} his age is : ${age}`);
}

//----------------------------------------------------------

// setInterval(function(){},1000)

//1ere
//تعاد كل ثانية الكود

// let i = 0;

// let y = setInterval(function(){
//     console.log(i++)
// },1000)

// //لتوقيف فورا

// clearInterval(y)
//----------------------------------------------------------

//2eme
//لتوقيف عند نقطة معينة
let i = 0;

let y = setInterval(function () {
  console.log(i++);
  if (i == 4) {
    clearInterval(y);
  }
}, 1000);

//----------------------------------------------------------
let div = document.querySelector("div");

function neg() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}

let counter = setInterval(neg, 1000);
