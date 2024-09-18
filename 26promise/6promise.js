// //async before function mean this function return a promise  and await
// function getData() {
//   return new Promise((res, rej) => {
//     let users = ["mouhamad"];
//     if (users.length > 0) {
//       res("users found");
//     } else {
//       rej("no users found");
//     }
//   });
// }

// getData().then(
//   (resoleValue) => console.log(resoleValue),
//   (rejectedValue) => console.log(rejectedValue)
// );
//===========================================
//2eme method

// function getData() {
//   let users = ["mouhamad"];
//   if (users.length > 0) {
//     return Promise.resolve("users found");
//   } else {
//     return Promise.rejected("no users found");
//   }
// }

// getData().then(
//   (resoleValue) => console.log(resoleValue),
//   (rejectedValue) => console.log(rejectedValue)
// );
//3eme method  async ===>   تعود لنا promise   بدون ان نتكبها

async function getData() {
  let users = ["mouhamad"];
  if (users.length > 0) {
    return "users found";
  } else {
    throw new Error("no users found");
  }
}

console.log(getData());
// Promise {[[PromiseState]]: 'fulfilled', [[PromiseResult]]:
//  'users found', Symbol(async_id_symbol): 5, Symbol(trigger_async_id_symbol): 1}
getData().then(
  (resoleValue) => console.log(resoleValue),
  (rejectedValue) => console.log(rejectedValue)
); //users found
