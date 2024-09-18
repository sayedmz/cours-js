//call stack and web api

setTimeout(() => {
  console.log("web API");
}, 0);

function one() {
  console.log("one");
}
function two() {
  one();
  console.log("two");
}
function three() {
  two();
  console.log("three");
}
three();

//===============================================
// one
// two
// three
// web API
