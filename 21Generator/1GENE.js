// // generator fun

// function* generateNumbers() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
// }

// let generator = generateNumbers();
// console.log(typeof generateNumbers); //Object
// console.log(generateNumbers);
// // ƒ* generateNumbers() {
// //   yield 1;
// //   yield 2;
// //   yield 3;
// //   yield 4;
// //   yield 5;
// // }
// //=========================================
function* generateNumbers() {
  yield 1;
  console.log("hello after yield 1");
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}
let generator = generateNumbers();

console.log(generator.next());
//{value: 1, done: false}  false ==>  اي لم تنتهي بعد
console.log(generator.next()); // hello after yield 1  , Object { value: 2, done: false }
console.log(generator.next()); //Object { value: 3, done: false }
console.log(generator.next()); //Object { value: 4, done: false }
console.log(generator.next()); //Object { value: 5, done: false }
console.log(generator.next()); //Object { value: undefined, done: true }
console.log(generator.next()); //Object { value: undefined, done: true }
//===================
for (let value of generateNumbers()) {
  console.log(value);
}
// 1
// hello after yield 1
// 2
// 3
// 4
// 5
///============================

for (let value of generator) {
  console.log(value);
}
//  لا يعطينا شيئ لاننا استخدمنا العناصر كلها من هذا المتغير وهو الان فارغ
//  يعمل اذا اوقفنا جميع ما سبق
