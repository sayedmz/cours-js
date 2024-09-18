let friend = ["ahmad", "samir", "sayed", "asmaa", "omar", "hala"];

let num = [11, 2, 13, 44, 3, 6, 12];

let addmap = num.map((ele) => ele + ele);
console.log(`this is addmap : ${addmap} `); //: 22,4,26,88,6,12,24
//==========================
let addfil = num.filter((ele) => ele + ele);
console.log(`this is addfil : ${addfil} `); //: 11,2,13,44,3,6,12
//filter لا تاثر على الارقام والجمع والعمليات

//==================================================

let filfriend = friend.filter(function (el) {
  return el.startsWith("a") ? true : false;
});
console.log(`this ih filfriend ${filfriend}`); //ahmad,asmaa
//==================================================

let evenNumb = num.filter(function (el) {
  return el % 2 == 0 ? true : false;
});
console.log(`this ih evenNumb ${evenNumb}`); //2,44,6,12
