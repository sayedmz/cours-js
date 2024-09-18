//set amd weakset
//============================
//set
let mySet = new Set([1, 1, 2, 3, 4, "a", "a", "b"]);
console.log(mySet); //{ 1, 2, 3, 4, a, b}
//size
console.log(mySet.size); //6

//value + keys
let iterator = mySet.keys();
console.log(iterator.next()); //{value: 1, done: false}
// خطا لانها لم تصل الى اخر عنصر
console.log(iterator.next().value); //2
console.log(iterator.next().value); //3
console.log(iterator.next().value); //4
console.log(iterator.next().value); //a
console.log(iterator.next().value); //b
console.log(iterator.next()); //{value: undefined, done: true}

// forEach
mySet.forEach((el) => console.log(el)); //1,2,3,4,a,b
//============================
//weakset
//type of data
//لا تقبل الا اوبجكت
let myWs = new WeakSet([{ a: 1, b: 2 }]);
console.log(myWs); //WeakSet {{a: 1, b: 2}}
//size
console.log(myWs.size); //undefined

//value + keys
// let iterator1 = myWs.keys();
// console.log(iterator1.next()); // لا تقيل هذة الخاصية
// forEach
// myWs.forEach((el) => console.log(el));// لا تقيل هذة الخاصية
