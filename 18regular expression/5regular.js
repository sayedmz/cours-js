let email = "o@@@g...com o@g.com o@g.net A@Y.com o-g.com o@s.org 1@1.com";
//  البحث عن كل شيئ
let dot = /./g;
console.log(email.match(dot));
//==========================================
// \w ==> a-z A-Z  0-9 underscore
let word = /\w/g;
console.log(email.match(word));
//==========================================
// \W ==> special dech space dot
let special = /\W/g;
console.log(email.match(special));
//================================================

//================================================

let EmailValid = /\w@\w/g;
console.log(email.match(EmailValid));
//['o@g', 'o@g', 'A@Y', 'o@s', '1@1']
let EmailValid1 = /\w@\w.com/g;
console.log(email.match(EmailValid1));
// ["o@g.com", "A@Y.com", "1@1.com"];
let EmailValid2 = /\w@\w.(com|net)/g;
console.log(email.match(EmailValid2));
//['o@g.com', 'o@g.net', 'A@Y.com', '1@1.com']
