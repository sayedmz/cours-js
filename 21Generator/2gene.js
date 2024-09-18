function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll() {
  yield* generateNumbers(); // * ==>  ضرورية ليعرف اننا نريد الفوكشكن وليس اسم عادي
  yield* generateLetters();
  yield [4, 5, 6];
  yield* [7, 8, 9];
}
let generator = generateAll();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
// {value: 1, done: false}
// {value: 2, done: false}
// {value: 3, done: false}
// {value: 'A', done: false}
// {value: 'B', done: false}
// {value: 'C', done: false}
// {value: Array(3), done: false} //   الفرق بين انا عدم وضع نجمع بجانب الييلد الكل في ارري وحدي
// {value: 7, done: false} // عندما نضع نجمة كل واحدة وحدها
// {value: 8, done: false}
// {value: 9, done: false}
// {value: undefined, done: true}
//====================================
function* generateNumbers1() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

let generator1 = generateNumbers1();
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.return("hello")); //  توقف جميع ما بعدها مع عدم التعرف عليهم
console.log(generator1.next());
console.log(generator1.next());
// {value: 1, done: false}
// {value: 2, done: false}
// {value: 'hello', done: true} // return true ==>  انتهى العمل
// {value: undefined, done: true}
// {value: undefined, done: true}

//=====================
function* generateNumbers1() {
  yield 1;
  yield 2;
  return "hello";
  yield 3;
  yield 4;
} // =====> return  === تعمل نمام مثل المثل في الاعلى
