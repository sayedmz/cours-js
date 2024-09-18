// تحويل من تجسون الى جافا والعكس

const myJsonObejctFromServer = '{"userNamer" : "mouhamad" , "age" : 27}'; //string
console.log(typeof myJsonObejctFromServer);
console.log(myJsonObejctFromServer);
//{"userNmer" : "mouhamad" , "age" : 27}

const myJsObejct = JSON.parse(myJsonObejctFromServer);
console.log(typeof myJsObejct); //object
console.log(myJsObejct);
//{userNamer: 'mouhamad', age: 27}

myJsObejct["userNamer"] = "ahmad";
myJsObejct["age"] = 25;

const myJsonObjectTwoServer = JSON.stringify(myJsObejct);

console.log(typeof myJsonObjectTwoServer); //string
console.log(myJsonObjectTwoServer);
//{"userNamer":"ahmad","age":25}
