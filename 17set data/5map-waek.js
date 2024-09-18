//weakMap  نستطيع اضافة اوبجكت فقط

let mapUser = {
  name: "mohamad",
};
let myMap = new Map();
myMap.set(mapUser, "object");

mapUser = null;
// map  العنصر تم تخزينه ضمن
console.log(myMap); //Map(1) {size: 1, {name: 'mo…ad'} => object}
//====================================================
console.log("#".repeat(20));
//========================================
let wMapUser = {
  name: "mohamad",
};

let myWeakMap = new WeakMap();
myWeakMap.set(wMapUser, "object");
console.log(myWeakMap); //WeakMap {{name: 'mo…ad'} => object}

wMapUser = null;
//لا يتم تحفيظه
console.log(myWeakMap);
