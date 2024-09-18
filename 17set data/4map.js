// map data type
// methode
// set
// get
// delete
// clear
// has   check in elements
//size
let myMap = new Map([
  [10, "number"],
  ["name", "string"],
  [false, "boolean"],
]);
// myMap.set(10, "number");
// myMap.set("name", "string");
console.log(myMap);
//Map(2) {size: 2, 10 => number, name => string}
console.log(myMap.get(10)); //number
console.log(myMap.get("name")); //string
console.log(myMap.get(false)); //boolean
console.log(myMap.size); //3

console.log(myMap.delete("name")); //true
console.log(myMap.size); //2
// myMap.clear();
// console.log(myMap.size); //0
console.log(myMap.has(false)); //true
console.log(myMap.has("mou")); //false
