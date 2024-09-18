//==========Array.from////////////////
console.log(Array.from("mouhamad"));
//['m', 'o', 'u', 'h', 'a', 'm', 'a', 'd']
console.log(Array.from("12345"));
//['1', '2', '3', '4', '5']
//=====================================
console.log(
  Array.from("12345", function (n) {
    return +n + +n;
  })
); //[2, 4, 6, 8, 10]
//====================
console.log(Array.from("12345", (n) => +n + +n));
//[2, 4, 6, 8, 10]
//======================================
let myArry = [1, 1, 1, 2, 3, 4];
let mySet = new Set(myArry);
console.log(mySet); // {size: 4, 1, 2, 3, 4}

console.log(Array.from(mySet)); //[1, 2, 3, 4]

console.log([...new Set(myArry)]); //[1, 2, 3, 4]

//  انشاء أرري من خلال فنكشن
function af() {
  return Array.from(arguments); //arguments  للوصل للجميع
}

console.log(af("mou", "zak", 1, 2, 3, "sayed"));
//['mou', 'zak', 1, 2, 3, 'sayed']
