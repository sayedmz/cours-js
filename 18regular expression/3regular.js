let tld = "com net org info code io";
let tldRe = /(org|info|io)/i;
console.log(tld.match(tldRe)); //org
let tldRe1 = /(info|org|io)/i; //org
//  تاخذ اول نتجية تصل اليها في المجموعة
let tldRe2 = /(info|org|io)/gi;
console.log(tld.match(tldRe2));
//['org', 'info', 'io']
//==========================================

let nums = "12345678910";
let numRe = /[0-9]/;
console.log(nums.match(numRe)); //1
//---------------------------
let numRe1 = /[0-9]/g;
console.log(nums.match(numRe1));
//['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '0']
let numRe2 = /[0-3]/g;
console.log(nums.match(numRe2));
//['1', '2', '3', '1', '0']
//===============================================
let notNums = "12345678910";
let notNsre = /[^0-2]/g;
//^  كل شيئ الا المحدد
console.log(notNums.match(notNsre));
//['3', '4', '5', '6', '7', '8', '9']
//===============================================
let specialNums = "1@23$4%5&6!78910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));
//['@', '$', '%', '&', '!']
//===============================================
let practice = "os1 os1os os2 os8 os8os";
let practiceRe = /os[5-9]os/gi;
console.log(practice.match(practiceRe));
//['os8os']
// للبحث عن شيئ محدد ودقيق
//=============================================
