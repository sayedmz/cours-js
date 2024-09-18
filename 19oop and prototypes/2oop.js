//constructor function
//  محناجين نزود سالري من كل واحد
//1ere methode
//1ere lettere uppercase
function User(id, userName, salary) {
  this.i = id;
  this.y = userName;
  this.s = salary + 1000; // نزيد الف على الكل
}
let userOne = new User(100, "ZAK", 5000);
let userTwo = new User(101, "mou", 6000);
let userThree = new User(102, "ahmad", 7000);

console.log(userOne.i); //100
console.log(userOne.y); //ZAK
console.log(userOne.s); //6000

console.log(userTwo.i); //101
console.log(userTwo.y); //mou
console.log(userTwo.s); //7000
// يمكننا اجراء اي تعديل بكل سهولة
//2eme methode
// const userOne = {
//   id: 100,
//   yserName: "ZAK",
//   salary: 5000,
// };
// const userTwo = {
//   id: 101,
//   yserName: "mou",
//   salary: 6000,
// };
// const userThree = {
//   id: 102,
//   yserName: "ahmad",
//   salary: 7000,
// };
