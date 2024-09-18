//asynchronous    synchronous

//asynchronous متزامن
//  العمليات بالترتيب ويجب ان تنتهي كل عملية
// console.log("1");
// console.log("2");
// window.alert("hello word");
// console.log("3"); //  لا تعمل الا عندما  تنتهي القبلها
// console.log("4");
//=========================================================
//=========================================================

// synchronous; غير متزامن
//  ممكن تشغيل العمليات مع بعضها

console.log("1");
console.log("2");
setTimeout(() => console.log("hello word"), 4000);
console.log("3"); //  ستعمل قبل ستأوت
console.log("4");
