let dateNow = new Date();
let birthday = new Date("Jan 12, 97");

console.log(birthday);
//Sun Jan 12 1997 00:00:00 GMT+0200 (Eastern European Standard Time)
let dateDIff = dateNow - birthday;
console.log(dateDIff); //857768788018
console.log(dateDIff / 1000 / 60 / 60 / 24 / 365);
//27.199671348839416 years

console.log(dateNow);
//Mon Mar 18 2024 21:04:44 GMT+0200 (Eastern European Standard Time)
// start of time  الوقت بالثواني من اول
console.log(dateNow.getTime()); //1710788953012

// date of the month
console.log(dateNow.getDate()); //18
// date of the years
console.log(dateNow.getFullYear()); //2024
//index of month  اول شهر صفر
console.log(dateNow.getMonth()); //2  شهر الثالث
//index of day sunday => zero
console.log(dateNow.getDay()); // 1 monday
//date in hours
console.log(dateNow.getHours()); //21
//date in muntes
console.log(dateNow.getMinutes()); //18
