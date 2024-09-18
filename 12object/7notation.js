//  object
//  dig deeper
//  dot notation vs bracket notation
//  dynamic property name

let myVar = "age";

let user = {
  theName: "osama",
  "country of": "lebanon",
  age: 26,
};
//طريقة الوصول الى العنصر في العديد من الحالات
console.log(user.theName); //osama

console.log(user["theName"]); //osama

console.log(user["country of"]); //lebanon

console.log(user[myVar]); //26
