const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  //عناصر التحكم بالاوبجكت
  writable: true, // نستطيع تعديل قميمتها  اذا كانت صح ام اذا كانت خطا لا نستطيع
  enumerable: true, //  نستطيع ان نقوم ب لوبغ على حرف سي الذي قمنا بإداخله جديد اي فور  ولكن اذا كانت خطا لا نستطيع ذلك
  configurable: true, // اذا كانت صح نستطيع ان نحذف ما نشاء والعكس
  value: 3,
});
// writable exemple

console.log(myObject); //{a: 1, b: 2, c: 3}

// myObject.c = 100;
// console.log(myObject); //{a: 1, b: 2, c: 100}

//======================================
//enumerable  ture
for (let prop in myObject) {
  console.log(prop, myObject[prop]);
}
console.log(myObject);
// a 1
// b 2
// c 3
// {a: 1, b: 2, c: 3}

//enumerable  false
// a 1
// b 2
// {a: 1, b: 2, c: 3}
//======================================
//======================================
// configurable: true,
// لحذف اي عنصر من المجموعة
delete myObject.c;
console.log(delete myObject.c); // true  اي تم الحذف

// configurable  اذا كانت صح نستطيع ايضا ان نغيير في قيمتها عن طريق هذ الشكل
Object.defineProperty(myObject, "c", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: 100,
});
// c 100
//======================================
