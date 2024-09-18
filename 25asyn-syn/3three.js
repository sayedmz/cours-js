//events loop + callback queue

console.log("one");
setTimeout(() => {
  console.log("three");
}, 0);
setTimeout(() => {
  console.log("four");
}, 0);
console.log("two");
// one;
// two;
// three;
// four;
//===================================
let myVar = 100;
myVar += 100;
console.log(myVar);
// one;
// two;
// 200;
// three;
// four;
//========================================
setTimeout(() => {
  console.log(myVar1);
}, 0);

let myVar1 = 500;
myVar1 = myVar1 + 500;
// one;
// two;
// 200;
// three;
// four;
// 1000;
