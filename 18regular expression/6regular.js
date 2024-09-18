let names = "sayed 1span 2span 3span span4 span5 osama ahmed Aspano";
// \b ==>  يجب ان يبدء او ينتهي اسم بالمطلوب  الذي نحدده بعده مباشرة
let re = /\bspan/gi;
console.log(names.match(re));
//['span', 'span']
let re1 = /span\b/gi;
console.log(names.match(re1));
// ["span", "span", "span"];
let re2 = /(\bspan|span\b)/gi;
console.log(names.match(re2));
//['span', 'span', 'span', 'span', 'span']
//=========================================
//test  هل يوجد من هذا الشيئ في المجموعة

console.log(re.test(names)); //true
console.log(/(\bspan|span\b)/gi.test("osama")); //false
console.log(/(\bspan|span\b)/gi.test("1span")); //true
//===========================================
//\B ==>
