// function User(id, userName, salary) {
//   this.i = id;
//   this.y = userName;
//   this.s = salary + 1000; // نزيد الف على الكل
// }
// in word User => crtl + dot
// ===
class User {
  constructor(id, userName, salary) {
    this.i = id;
    this.y = userName;
    this.s = salary + 1000; // نزيد الف على الكل
  }
}
let userOne = new User(100, "ZAK", 5000);
let userTwo = new User(101, "mou", 6000);
let userThree = new User(102, "ahmad", 7000);

console.log(userOne.i); //100
console.log(userOne.y); //ZAK
console.log(userOne.s); //6000

console.log(userOne instanceof User); //true
//instanceof  هل هو من هذة ال أوبجكت
//======================
console.log(userOne.constructor === User); //true
// constructor   هل هي تساوي بعضها
// نستطيع ان نعرف من هو الاب

//
