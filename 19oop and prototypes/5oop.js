// update properties
// nuilt in constructor

class User {
  constructor(id, userName, salary) {
    this.i = id;
    this.y = userName;
    this.s = salary + 1000; // نزيد الف على الكل
  }
  updateName(NewName) {
    this.y = NewName;
  }
}
let userOne = new User(100, "ZAK", 5000);
console.log(userOne.y); //ZAK
userOne.updateName("sayed");
console.log(userOne.y); //sayed
//==================================
let strOne = "sayed";
let strTwo = new String("sayed");
console.log(typeof strOne); //string
console.log(typeof strTwo); //object

console.log(strOne instanceof String); //false  ليس منه
console.log(strOne.constructor === String); //true  //  ولكن هوي يساوية
console.log(strTwo instanceof String); //true
console.log(strTwo.constructor === String); //true
//==============================================
console.log(`=======================`);
let strNum1 = 100;
let strNum2 = new Number(100);
console.log(typeof strNum1); //string
console.log(typeof strNum2); //object

console.log(strNum1 instanceof Number); //false  ليس منه
console.log(strNum1.constructor === Number); //true  //  ولكن هوي يساوية
console.log(strNum2 instanceof Number); //true
console.log(strNum2.constructor === Number); //true
