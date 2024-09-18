let myFriend = ["ahmad", "mouhamad", "ali", "maysaa"];

let [a = "zayed", b, c, d, e] = myFriend;
console.log(a); //ahmad
console.log(b); //mouhamad
console.log(c); //ali
console.log(d); //maysaa
console.log(e); //undefined
//======================
let [, y, , z] = myFriend;

console.log(y); //mouhamad
console.log(z); //maysaa

//===========================================
let myFriend1 = [
  "ahmad",
  "mouhamad",
  "ali",
  ["abed", "amr", ["manal", "gamal"]],
];

console.log(myFriend1[3]); //  ["abed", "amr", ["manal", "gamal"]]
console.log(myFriend1[3][2][1]); //gamal

//=======================================
let [, , , [a1, , [b1]]] = myFriend1;
console.log(a1); //abed
console.log(b1); //manal
