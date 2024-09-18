// async & aait with try ,catch , finally

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

//===========================================

// const myPromise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     // res("iam the good promise");
//     rej("iam the bad promise");
//   }, 3000);
// });

// async function readData() {
//   console.log("before promise");

//   try {
//     //  هل بروميس سيتحقق

//     console.log(await myPromise1);
//   } catch (reason) {
//     console.log(`reason : ${reason}`);
//   } finally {
//     console.log("after promise");
//   }
// }
// readData();
//==============================================

async function fetchData() {
  console.log("before fetch");

  try {
    let myData = await fetch("1syntax.json");
    // let myData = await fetch("https://api.github.com/users/elzerowebschool/repos");
    console.log(await myData.json());
  } catch (reason) {
    console.log(`reason : ${reason}`);
  } finally {
    console.log("after fetch");
  }
}
fetchData();
