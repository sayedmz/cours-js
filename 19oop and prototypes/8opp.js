//encapsulation
class User {
  #e; //  يجب ان نقوم بتعريفها ضروري
  constructor(id, userName, eSalary) {
    this.i = id;
    this.y = userName;
    //  نتبع هذة الطريق لانه من الممكن ان يعطينا المستخدم قيمة ليست رقم
    this.#e = eSalary; // لا نستطيع ان نصل الى نتيجتها مباشرة
  }
  //  لنصل الى النتجية
  getSalary() {
    return parseInt(this.#e);
  }
}

let userName = new User(100, "mouhamad", "500 dolor"); //  500 dolor  لست رقم

console.log(userName.getSalary() * 90000); //45000000

class SuperMan extends User {
  constructor(id, userName, eSalary) {
    super(id, userName, eSalary);
  }
}

let superman = new SuperMan(110, "ahamd", "100 dolor");

console.log(superman.getSalary() * 90000); // 9000000;
