// innheritance

//parents class
class User {
  constructor(id, userName) {
    this.i = id;
    this.y = userName;
  }
  seyHello() {
    return `hello ${this.y}`;
  }
}
//derived class
class Admin extends User {
  //extends  يعنس ان ترث كل شيئ
  constructor(id, userName, permissions) {
    super(id, userName); // ماذا تريد ان ترث من الاوبجكت التي قبلها
    this.p = permissions;
  }
}

class SuperMan extends Admin {
  constructor(id, userName, permissions, ability) {
    super(id, userName, permissions);
    this.a = ability;
  }
}

let userOne = new User(100, "mouhamad");
let adminOne = new Admin(110, "abed", 1);
let superMan = new SuperMan(130, "hala", 1, 50);
console.log(userOne.y);

console.log(adminOne.i); //110
console.log(adminOne.y); //abed
console.log(adminOne.p); //1
console.log(adminOne.seyHello()); //hello abed
//=================================================c
console.log(`==========================`);
console.log(superMan.i); //130
console.log(superMan.y); //hala
console.log(superMan.seyHello()); // hello hala
console.log(superMan.a); //50
