// export let a = 10;
// export let arr = [1, 2, 3, 4];

// export function hello() {
//   return `hello`;
// }

let a = 10;
let arr = [1, 2, 3, 4];

function hello() {
  return `hello`;
}

// 2eme methode
export { a as nyNumber, arr, hello };

export default function () {
  return `hello word`;
}

// import * as all from "./main.js";
