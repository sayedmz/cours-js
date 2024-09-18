let obj = {};
let myEmptyObj = Object.create(null);
let myMap = new Map();
console.log(obj);
console.log(myEmptyObj);
console.log(myMap);

let mynewObj = {
  10: "number",
  10: "string", //'10' , 'stirng'
};
console.log(mynewObj[10]); //string
console.log(mynewObj["10"]); //string

let maNewMap = new Map();
maNewMap.set(10, "number");
maNewMap.set("10", "string");
maNewMap.set(true, "boolean");
maNewMap.set({ a: 1, b: 2 }, "object");
maNewMap.set(function fun22() {}, "function");

console.log(maNewMap.get(10)); //number;
console.log(maNewMap.get("10")); //string;
console.log(maNewMap);
//  {size: 5, 10 => number, 10 => string,
//   true => boolean, {a: 1, b: 2} => object, ƒ fun22() {} => function}
// map : يتم ترتيب البيانات بالشكل الصحيح
// map : size يمكننا استعمال
// map :  استطيع ان انوب عليه مباشرة
//map :  التعمامل مع الاضافة والحذف افضل واسرع
