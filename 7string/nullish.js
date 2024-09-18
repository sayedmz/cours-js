
// شرح كيفية استبدال اي قيمة اذا كانت غير صالحة 
// null + undefined + any falsy value
let price = 0 ;

console.log(`the price is ${price  || 200}`) // 200 اذا كانا لا نريد الصفر 


console.log(`the price is ${price  ?? 200}`) //0


let price1 = null ;

console.log(`the price is ${price1  || 200}`) // 200 


console.log(`the price is ${price1  ?? 200}`) //200
