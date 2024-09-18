//prototypes
class User {
  constructor(id, userName) {
    this.i = id;
    this.y = userName;
  }
  seyHello() {
    return `hello ${this.y}`;
  }
}
let userOne = new User(100, "mouhamad");

console.log(User.prototype);

console.log(userOne);
//=========================================

User.prototype.sayWelcome = function () {
  return `welcome ${this.y}`;
};
//=========================================
Object.prototype.love = "i love you ";
// نستطيع الوصول الى لوف عن طريق يوزر وان
console.log(userOne.love);
//=========================================

String.prototype.addDoBeforeAnAfter = function () {
  return `.${this}.`;
};

let myString = "mouhamad";
console.log(myString.addDoBeforeAnAfter()); //.mouhamad.
