//await
//   work in Async just
// تجعل الجافا تنتظر نتيجة برومز

// بدون  await
// const myPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("iam the good promise");
//   }, 3000);
// });

// function readData() {
//   console.log("before promise");
//   myPromise.then((resValue) => console.log(resValue));
//   console.log("after promise");
// }
// readData();
//=========================================
// before promise
// after promise
// iam the good promise
//========================================
// async يجب علينا ان نضع  await  لنستعمل
// const myPromise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("iam the good promise");
//   }, 3000);
// });

// async function readData() {
//   console.log("before promise");
//   console.log(await myPromise1);
//   console.log("after promise");
// }
// readData();
//========================================
// before promise
// iam the good promise
// after promise
//========================================

const myPromise11 = new Promise((res, rej) => {
  setTimeout(() => {
    rej(Error("iam the bad promise"));
  }, 3000);
});

async function readData1() {
  console.log("before promise");
  console.log(await myPromise11.catch((err) => err));
  console.log("after promise");
}
readData1();

// before promise
// Error: iam the bad promise
//     myPromise11 http://127.0.0.1:5500/7promise.js:43
//     setTimeout handler*myPromise11< http://127.0.0.1:5500/7promise.js:42
//     <anonymous> http://127.0.0.1:5500/7promise.js:41
// 7promise.js:49:11
// after promise
