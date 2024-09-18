//callback hell   عدة اوامر داخل بعضها
//البحث عنها في غوغل

function makeItRed(e) {
  e.target.style.color = "red";
}

let p = document.querySelector(".text");

p.addEventListener("click", makeItRed);
//==============================================
function iamACallback() {
  console.log("iam A call back function");
}

setTimeout(iamACallback, 2000);

//==============================================
setTimeout(() => {
  console.log("download photo from url");
  setTimeout(() => {
    console.log("resize photo");
    setTimeout(() => {
      console.log("add logo");
      setTimeout(() => {
        console.log("show logo ");
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);
