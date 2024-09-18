const user = {
  name: "mouhamad",
  age: 26,
  skills: {
    html: 70,
    css: 80,
  },
};

//1ere mwthode
// function showDetalis(obj) {
//   console.log(`your name is ${obj.name}`);
//   console.log(`your age is ${obj.age}`);
//   console.log(`your css skills is ${obj.skills.css}`);
// }
//2eme methode
function showDetalis({ name: n, age, skills: { css } } = user) {
  console.log(`your name is ${n}`);
  console.log(`your age is ${age}`);
  console.log(`your css skills is ${css}`);
}

showDetalis(user);

//===================================
console.log(`====================`);
const user1 = {
  name: "mouhamad",
  age: 26,
  skills: ["html", "css"],
  add: {
    lebanon: "akkar",
    ksa: "riyad",
  },
};

const {
  name: n1,
  age: a,
  skills: [one, , three],
  add: { lebanon: lb, ksa: k },
} = user1;

console.log(`your name is ${n1}`);
console.log(`your age is ${a}`);
console.log(`your css skills is ${one} , ${three}`);
console.log(`your adderss is ${lb}`);
console.log(`your adderss is ${k}`);
