let user = {
  //property
  firstName: "mouhamad",
  lastName: "zakaria",
  age: 26,
  skills: ["html", "css", "js", "python"],
  active: true,
  phoneNumber: {
    first: "092390239",
    seconde: "678687678",
  },
  address: {
    lebanon: "akkar",
    uae: "abu dhabi",
  },
  //methode
  isActive: function () {
    if (user.active === true) {
      return "hello user";
    } else {
      return "sorry you are not active";
    }
  },
  getAge: function () {
    if (user.age >= 18) {
      return "avialable";
    } else {
      return "unavailable";
    }
  },
};
console.log(user); //{firstName: 'mouhamad', lastName: 'zakaria',
// age: 26, skills: Array(4), active: true, …}
console.log(user.firstName); //mouhamad
console.log(user["firstName"]); //mouhamad
console.log(user["phoneNumber"]); //{first: '092390239', seconde: '678687678'}
console.log(user["phoneNumber"]["first"]); //092390239
console.log(user.phoneNumber.first); //092390239
console.log(user.isActive()); //hello user
console.log(user.getAge()); //avialable
console.log(user["getAge"]()); //avialable
console.log(`-----------------------------`);
//-------------------------------------------------------
let user1 = {
  //property
  firstName: "mouhamad",
  lastName: "zakaria",
  age: 26,
  skills: ["html", "css", "js", "python"],
  active: true,
  phoneNumber: {
    first: "092390239",
    seconde: "678687678",
  },
  address: {
    lebanon: {
      one: "akar",
      two: "tripoli",
    },
    uae: "abu dhabi",
  },
  checkAv: function () {
    if (user1.active === true) {
      return `free for work`;
    } else {
      return `not free`;
    }
  },
};

console.log(user1.firstName); //active
console.log(user1.age); //26
console.log(user1.skills[2]); //js
console.log(user1.address.lebanon.one); //akar
console.log(user1["address"]["lebanon"]["one"]); //akar
console.log(user1.checkAv()); //free for work
