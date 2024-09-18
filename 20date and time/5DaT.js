//  لكي نحسب وقت اي عملية نتبه هذة الخطوات

//start time
let start = new Date();

//operation

for (let i = 0; i < 100000; i++) {
  //1ere methode
  document.write(`<di>${i}</di>`);
  //2eme methode
  //   let div = document.createElement("div");
  //   div.appendChild(document.createTextNode(i));
  //   document.body.appendChild(div);
}

//Time End
let end = new Date();

//operation duration
let duration = end - start;
console.log(duration); //102
