function sayName(fname, lname) {
  let message = "hello";
  //nested function
  function concat() {
    message = `${message} ${fname} ${lname}`;
  }
  concat();
  return message;
}

console.log(sayName("mouhamd", "zak")); //hello mouhamd zak

//exemple 2

function sayName1(fname, lname) {
  let message1 = "hello";
  //nested function
  function concat() {
    return `${message1} ${fname} ${lname}`;
  }

  return concat();
}

console.log(sayName1("mouhamd", "zak"));

//exemple 3

function sayName11(fname, lname) {
  let message1 = "hello";
  //nested function
  function concat() {
    function getfullname() {
      return `${fname} ${lname} `;
    }

    return `${message1} ${getfullname} `;
  }

  return concat();
}

console.log(sayName11("mouhamd", "zak"));
