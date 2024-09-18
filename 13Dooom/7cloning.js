// اخذ نسخة من العنصر مع اتريبيوت او بدون

let myp = document.querySelector("p").cloneNode(true);
// let myp = document.querySelector("p").cloneNode(false)
let mydiv = document.querySelector("div");

myp.id = `${myp.id}-clone`;

mydiv.appendChild(myp);
