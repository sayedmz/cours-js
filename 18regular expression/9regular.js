let myString = "we love programming";
let names = "10samaz 2ahmadZ 3mouhamad 4moustafaz 5gamalz";

//$ ==>  هل ينتهي
//^ ==>  هل يبدء

console.log(/ing$/gi.test(myString)); //true
console.log(/^we/gi.test(names)); //false

console.log(/^\d/gi.test(myString)); //false
console.log(/^\d/gi.test(names)); //true

//\s ==> space
console.log(/^\s/gi.test(names)); //false
//==================
//?=  ==>   يجب ان ينتهي ب
console.log(names.match(/\d\w{5}(?=z)/gi));
// ["10sama", "2ahmad", "5gamal"];

//?!   لا ينتهي
console.log(names.match(/\d\w{8}(?!z)/gi));
//["3mouhamad"];
