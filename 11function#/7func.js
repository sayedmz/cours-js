function sayHello() {
  console.log("hello sayed");
}

document.getElementById("show").onclick = sayHello;

setTimeout(() => {
  console.log("good");
}, 3000);
