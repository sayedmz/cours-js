let sentence = "i love foood code too playing much";
let z = "mo87ham43ad";
let smallword = sentence
  .split(" ")
  .filter(function (ele) {
    return ele.length <= 4;
  })
  .join(" ");
console.log(smallword); //i love code too much
//=======================================================
let z1 = z
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele));
  })
  .join("");
console.log(z1);
//=======================================================
let mix = "mo87ham43ad";

let num = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return ele * ele;
  })
  .join("");
console.log(` this is num ${num}`);
//=======================================================
