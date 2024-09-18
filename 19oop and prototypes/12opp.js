const myObject = {
  a: 1,
  b: 2,
};
Object.defineProperties(myObject, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});
console.log(myObject); //{a: 1, b: 2, c: 3, d: 4, e: 5}

console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
//{value: 4, writable: false, enumerable: false, configurable: true}
console.log(Object.getOwnPropertyDescriptors(myObject));
//{a: {…}, b: {…}, c: {…}, d: {…}, e: {…}}
