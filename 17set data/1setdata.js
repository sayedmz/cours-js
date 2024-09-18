let myData = [1, 1, 1, 2, 3, 4, "a"];
let myUniqueData = new Set([1, 1, 1, 2, 3, 4, "a"]);

// console.log(myData); //[1, 1, 1, 2, 3, 4]
// console.log(myUniqueData); //Set(4) {1, 2, 3, 4}
//======================
// console.log(myData[0]); //1
// console.log(myUniqueData[0]); //undefined
//========================
//add===============
//1ere
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3).add(4);
//2eme
// let myUniqueData = new Set().add(1).add(1).add(1)
// let myUniqueData = new Set().add(2)
// let myUniqueData = new Set().add(3)
// let myUniqueData = new Set().add(4)
//delete==================
console.log(myUniqueData.delete(2)); //true
myUniqueData.delete(2);

console.log(myUniqueData); //{1, 3, 4}
// clear ====================
// myUniqueData.clear();
// console.log(myUniqueData); //{size: 0}
//===================
//has
console.log(myUniqueData.has("a")); //true
console.log(myUniqueData.has("b")); //false
