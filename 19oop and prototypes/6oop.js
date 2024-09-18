class User {
  count = 0;
  static count1 = 0;
  constructor(id, userName, salary) {
    this.i = id;
    this.y = userName;
    this.s = salary + 1000; // نزيد الف على الكل
    User.count1++;
  }
  static seyHello() {
    return `hello form class`;
  }

  static countNumbers() {
    return `${this.count1} Nembers created`;
  }
}
let userOne = new User(100, "ZAK", 5000);
let userTwo = new User(101, "mou", 6000);
let userThree = new User(102, "ahmad", 7000);

console.log(userOne.y); //ZAK
console.log(userTwo.y); //mou
// بدون   static
console.log(userOne.count); //0
console.log(User.count); //undefined
// مع  static
console.log(userOne.count1); //undefined
console.log(User.count1); //0
//================================================
console.log(User.seyHello()); //hello form class
// console.log(userOne.seyHello()); error  بسبب كلمة ستاتيك
//=====================================
console.log(User.countNumbers()); //3 Nembers created حسب عدد  الاوبجكت التي انشانها
