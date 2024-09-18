let x = [1, 2, 3, 4, 5, 6];

let newarry = [];

for (let i = 0; i < x.length; i++) {
  newarry.push(x[i] + x[i]);
}
console.log(newarry); //[2, 4, 6, 8, 10, 12]

//map

let y = x.map(function (element, index, arr) {
  return element + element;
}, 10);
console.log(y);
//==================================================================
// let y1 = x.map(function (element, index, arr) {
//   console.log(`current element ${element}`);
//   console.log(`index ${index}`);
//   console.log(`array ${arr}`);
//   console.log(`this ${this}`);
// }, 10);
//=====================================================================
let y2 = x.map((el) => el + el);
console.log(`this is y2 : ${y2}`);
//this is y2 : 2,4,6,8,10,12
function add(ele) {
  return ele + ele;
}
let y3 = x.map(add);
console.log(`this is y3 : ${y3}`);
//this is y3 : 2,4,6,8,10,12
