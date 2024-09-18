class User {
  constructor(id, userName, salary) {
    this.i = id;
    this.y = userName || "unknow";
    this.s = salary < 6000 ? salary + 500 : salary;
    this.msg = function () {
      return `hello ${this.y} your salary is ${this.s}`;
    };
  }
  // methodes  خارج constructor
  writesmsg() {
    return `hello ${this.y} your salary is ${this.s}`;
  }
}

let userOne = new User(100, "", 5000);
let userTwo = new User(101, "ZAK", 6000);

console.log(userOne.y); //unknow
console.log(userOne.s); //5500
console.log(userOne.msg()); //hello unknow your salary is 5500
console.log(userOne.writesmsg()); //hello unknow your salary is 5500

console.log(`======================`);
console.log(userTwo.i);
console.log(userTwo.s); //6000
console.log(userTwo.msg); //native code  لاننا وضعنها بدون قوسين
// ƒ () {
//       return `hello ${this.y} your salary is ${this.s}`;
//     }
console.log(userTwo.writesmsg);

// ƒ writesmsg() {
//     return `hello ${this.y} your salary is ${this.s}`;
//   }
