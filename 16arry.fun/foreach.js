let allList = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");
//عندما نضغط على العنصر يذهب الى كونسول
// allList.forEach(function (ele) {
//   ele.onclick = function () {
//     console.log(this);
//   };
// });

//=====================================
// لاضافة كلاس عند الضغط على العنصر
// allList.forEach(function (ele) {
//   ele.onclick = function () {
//     this.classList.add("active");
//   };
// });
//========================================

// وضع الكلا للعنصر الذ اضغط عليه فقط ومسحه من عند الجميع
allList.forEach(function (ele) {
  ele.onclick = function () {
    //remove class active
    allList.forEach(function (a) {
      a.classList.remove("active");
    });
    this.classList.add("active");
    // hide div
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});
//========================================
