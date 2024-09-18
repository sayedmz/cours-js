let lis = document.querySelectorAll("ul li");
let div = document.querySelector(".div1");

if (window.localStorage.getItem("color")) {
  //if there is color in localsorge
  // 1 add div background color
  div.style.backgroundColor = window.localStorage.getItem("color");
  // 2 remove active class from all lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // 3 add active class to current color
  document
    .querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    console.log(e.currentTarget.dataset.color);
    //remove active class from all lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    //add  active class to current elenemt
    e.currentTarget.classList.add("active");
    //add current color to local storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    //change div background color
    div.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
