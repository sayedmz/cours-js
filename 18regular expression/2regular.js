let mString = "Hello Elzero web School ILove elzero";

//match
let regex = /Elzero/;
console.log(mString.match(regex));
//['Elzero', index: 6,...........
let regex1 = /elzero/;
console.log(mString.match(regex1));
//['elzero', index: 30,.........
//==========================================
// i = case - insensitive
let regex2 = /elzero/i;
console.log(mString.match(regex2));
// ['Elzero', index: 6,
//i  لا تفرق بين الاحرف الكبيرة والصغيرة
//==========================================
//g = global
//  يجلب كل النتائج الخاصة بالبحث

let regex3 = /elzero/gi;
console.log(mString.match(regex3));
//['Elzero', 'elzero']

let regex4 = /elzeroz/gi;
console.log(mString.match(regex4)); //null
