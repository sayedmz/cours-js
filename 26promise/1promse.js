//promise  وعد
//  callback hell  لتنب مشاكل
// asymchronous   يمثل حالة والنتاائج

// three status of promise
// 1 pending   -> it's initial state , نقدر نقول تحقق او لم يتحقق
// 2 Fulfilled  -> when promise get the result , completed successfully
// 3 rejected -> failed

// const myPromise = new Promise((resolveFun, rejecteFun) => {
//   let connect = true;
//   if (connect) {
//     resolveFun("connected");
//   } else {
//     rejecteFun(Error("connected failed"));
//   }
// }).then(
//   (resolveValue) => console.log(`good ${resolveValue}`),
//   (rejectValue) => console.log(`bad ${rejectValue}`)
// );
// =================================

// console.log(myPromise);
// good connected
// Promise {[[PromiseState]]: 'pending', [[PromiseResult]]: undefined,
//  Symbol(async_id_symbol): 6, Symbol(trigger_async_id_symbol): 5}
//============================================================
// نستعمل هذة الطريق لنحصل على معلومات مفصلة
const myPromise = new Promise((resolveFun, rejecteFun) => {
  let connect = true;
  if (connect) {
    resolveFun("connected");
  } else {
    rejecteFun(Error("connected failed"));
  }
});
console.log(myPromise);
// then   يعني بعد انتهاء العملية الاولى نفذلي العملية الثانية
myPromise.then(
  (resolveValue) => console.log(`good ${resolveValue}`),
  (rejectValue) => console.log(`bad ${rejectValue}`)
);
