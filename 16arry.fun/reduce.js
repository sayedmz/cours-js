let numbers = [10, 20, 30, 40, 50];

let add = numbers.reduce(function (acc, current, index, arr) {
  console.log(`this is acc ${acc}`);
  console.log(`this is current ${current}`);
  console.log(`this is index ${index}`);
  console.log(`this is arr ${arr}`);
  console.log(`================`);
  return acc + current;
});
console.log(add); //150
//=========================================================================
let add1 = numbers.reduce(function (acc, current, index, arr) {
  return acc + current;
}, 10); //10  ابدء القمية الاولى من 10
console.log(add1); //160
//===============================================================

let k = ["bla", "propaganda", "other", "aaa", "battery", "text"];

let check = k.reduce(function (acc, current) {
  return acc.length > current.length ? acc : current;
});
console.log(check); //propaganda
//===============================================================

let v = ["m", "o", "@", "u", "@", "h", "a", "@", "m", "@", "a", "@", "d"];

let finalV = v
  .filter(function (ele) {
    return !ele.startsWith("@");
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  })
  .toUpperCase();
console.log(finalV);
