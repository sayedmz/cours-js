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

let str1 = "mohamad";
console.log(String.prototype);
