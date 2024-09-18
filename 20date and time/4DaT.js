let date1 = new Date(0);
console.log(date1);
//Thu Jan 01 1970 02:00:00 GMT+0200 (Eastern European Standard Time)

//الوقت من تاريخ محدد الى اللحظة الحاضرة بالملي ثانية
console.log(Date.parse("Jan 12 , 97")); //853020000000

let date2 = new Date(853020000000);
console.log(date2);
//Sun Jan 12 1997 00:00:00 GMT+0200 (Eastern European Standard Time)
//==============================================================
console.log(Date.parse("dec 22 , 98")); //914277600000
let date3 = new Date(914277600000);
console.log(`date of totah ${date3}`);
//date of totah Tue Dec 22 1998 00:00:00 GMT+0200 (Eastern European Standard Time)
//==============================================================
let date4 = new Date("1 / 12 / 1997");
//let date4 = new Date("1-12-1997");
//let date4 = new Date("1 12 1997");
console.log(date4);
//Sun Jan 12 1997 00:00:00 GMT+0200 (Eastern European Standard Time)
//==============================================================
let date5 = new Date("1997 / 1 / 12");
// let date5 = new Date("1997 / 1");
// let date5 = new Date("1997");
// let date5 = new Date("97");
console.log(date5);
//Sun Jan 12 1997 00:00:00 GMT+0200 (Eastern European Standard Time)
//==============================================================
let date6 = new Date(1997, 1, 12, 2, 34, 50, 0); //years,months,days,hours,mimutes,seconds,millseconds
console.log(date6);
