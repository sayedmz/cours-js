//crete elements
//1ere methode
document.body.innerHTML = `
<h1>hello word</h1>
<h2>hello word</h2>
<p>hello word</p>
`;

//2eme methode
//  تعتمد على ثلاث خطوات
//  1 - انشاء العنصر
//  2 - اضافة المحتوى في المكان الناسب
//  3 - اضافة العنصر ضمن الاب الخاص به

//  1 - انشاء العنصر

let container = document.createElement("div");
let head = document.createElement("h1");
let y = document.createElement("img");

//  2 - اضافة المحتوى في المكان الناسب

let x = document.createTextNode("hello ronaldo");
head.appendChild(x);
console.log(head);
y.src = "download.jpg";

y.style.width = "300px";
y.style.borderRadius = "20%";
head.style.color = "yellow";
head.style.background = "black";

container.style.background = "#444";
container.style.textAlign = "center";

//  3 - اضافة العنصر ضمن الاب الخاص به
container.appendChild(y);
container.appendChild(head);

document.body.appendChild(container);
console.log(container);
