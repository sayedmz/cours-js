let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru";
let mailRe = /\w@\w\w.sa/gi;
console.log(mails.match(mailRe)); //['o@nn.sa']
// +  حرف او اكثر
let mailRe1 = /\w+@\w+.(com|net)/gi;
console.log(mails.match(mailRe1));
//['osama@gmail.com', 'elzero@gmail.net']
let mailRe2 = /\w+@\w+.\w+/gi;
console.log(mails.match(mailRe2));
//['o@nn.sa', 'osama@gmail.com', 'elzero@gmail.net', 'osama@mail.ru']

//================================================
let num = "0110 10 150 05120 0560 350 00"; // 0 mun or no 0
//  \d --> رقم
let numRe = /0\d+0/gi;
console.log(num.match(numRe));
// ["0110", "05120", "0560"];
// * ==>  احتمال يكون موجود او لا
let numRe1 = /0\d*0/gi;
console.log(num.match(numRe1));
// ["0110", "05120", "0560", "00"];

//==============================================================
let urls = "https://google.com http://website.net web.com"; //http + https
let urlsRe = /https/gi;
console.log(urls.match(urlsRe));
//['https']
// ? ==>  ممكن يكون موجود او لأ
let urlsRe1 = /https?/gi;
console.log(urls.match(urlsRe1));
//['https', 'http']
let urlsRe2 = /https?:\/\/(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe2));
//['https://google.com', 'http://website.net']
let urlsRe3 = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe3));
//['https://google.com', 'http://website.net', 'web.com']
