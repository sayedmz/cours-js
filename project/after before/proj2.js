let after = document.getElementById("after");
let before = document.getElementById("before");
let append = document.getElementById("append");
let content = document.getElementById("content");
let container = document.getElementById("container");

container.style.backgroundColor = "#ff3";
container.style.height = "50px";

//لنقل الفقرة الى ما بعد الديف
after.onclick = function () {
  container.after(content);
};
//لنقل الديف الى ما بعد الفقرة
before.onclick = function () {
  container.before(content);
};
//لنقل الفقرة الى داخل الديف
append.onclick = function () {
  container.append(content);
};
//لوضع شيئ قبل العنصر
content.prepend(" helllo");

// لمسح شيئ
// content.remove();
