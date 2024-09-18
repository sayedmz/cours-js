// عمل جينريتر الى ما لا نهاية

function* generateNumbers1() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

let generator1 = generateNumbers1();
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
