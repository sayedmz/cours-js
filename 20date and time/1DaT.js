let dateNow = new Date();
console.log(dateNow);
//Mon Mar 18 2024 20:52:56 GMT+0200 (Eastern European Standard Time)

//الوقت  من اول يناير عام 1970
console.log(Date.now()); //1710788066185 mill seconde ; 1000mill = 1seconde

let seconde = Date.now() / 1000;
console.log(`seconde ${seconde}`); //seconde 1710788194.872

let nimutes = seconde / 60;
console.log(`minutes ${nimutes}`); //minutes 28513138.26315

let hours = nimutes / 60;
console.log(`hours ${hours}`); //hours 475218.9867327778

let days = hours / 24;
console.log(`days ${days}`); //days 19800.791582939815

let years = days / 365;
console.log(`years ${years}`); //years 54.24874580168696
