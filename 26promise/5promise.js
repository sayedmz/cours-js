//promise ALL

const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("i am the first promise");
  }, 5000);
});
const mySecondePromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("i am the two promise");
  }, 1000);
});
const myThreePromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("i am the three promise");
  }, 2000);
});
// all == >  يجب ان تتحقق الشروط في الجميع
Promise.all([myFirstPromise, mySecondePromise, myThreePromise]).then(
  (resValue) => console.log(resValue)
);

//=======================================================================
//  اذا كان هناك شرط غير محقق سوف يتم طباعته فقط
const myFirstPromise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("i am the first promise");
  }, 5000);
});
const mySecondePromise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("i am the two promise");
  }, 1000);
});
const myThreePromise1 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("i am the three promise");
  }, 2000);
});

Promise.all([myFirstPromise1, mySecondePromise1, myThreePromise1]).then(
  (resValue) => console.log(resValue),
  (rejValue) => console.log(rejValue)
);
//===============================================================
//allSettled ===>   يتم طباعة كل الشروط بكل المواصفات
const myFirstPromise11 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("i am the first promise");
  }, 5000);
});
const mySecondePromise11 = new Promise((res, rej) => {
  setTimeout(() => {
    res("i am the two promise");
  }, 1000);
});
const myThreePromise11 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("i am the three promise");
  }, 2000);
});

Promise.allSettled([
  myFirstPromise11,
  mySecondePromise11,
  myThreePromise11,
]).then(
  (resValue) => console.log(resValue),
  (rejValue) => console.log(rejValue)
);
//=====================================================================
//race ===>  يقوم بجلب اول امر يظهر امامه
const myFirstPromise111 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("i am the first promise");
  }, 5000);
});
const mySecondePromise111 = new Promise((res, rej) => {
  setTimeout(() => {
    res("i am the two promise");
  }, 1000);
});
const myThreePromise111 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("i am the three promise");
  }, 2000);
});

Promise.race([myFirstPromise111, mySecondePromise111, myThreePromise111]).then(
  (resValue) => console.log(resValue),
  (rejValue) => console.log(rejValue)
);
