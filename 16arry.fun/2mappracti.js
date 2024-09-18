let x = "moHAmaD";
let y = [1, 13, -3, 23, -32, -10];
let z = "mo87ham43ad";

let x1 = x
  .split("")
  .map(function (ele) {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
  })
  .join("");
console.log(x1);
//================================
// arrow function

let x11 = x
  .split("")
  .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
  .join("");
console.log(x11);
//================================
let y1 = y.map(function (ele) {
  return -ele;
});
console.log(y1);
//================================
// arrow function
let y11 = y.map((ele) => -ele);
console.log(y11);
//------------------------------------------
let z1 = z
  .split("")
  .map(function (ele) {
    //isNaN  تعطي صح للحرف
    //parseInt  للحرف NaN تعطي
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");
console.log(z1);
//================================
// arrow function
let z11 = z
  .split("")
  .map((ele) => (isNaN(parseInt(ele)) ? ele : ""))
  .join("");
console.log(z1);
