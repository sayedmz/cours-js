
//اربع طرق لتحويل النص الى رقم 
// +'9 mozak')
// Number('10 mozak')
// parseInt('10.5')
// parseFloat('10.5')
console.log('10' + '5'); //text 105
console.log('10' - '5'); // numbers 5
console.log('10' / '5'); // numbers 2
console.log('10' / 'mohamad'); // numbers NaN 
console.log( typeof NaN)
// لتحويل النص في عملية الجمع الى رقم نضع + - قبل الرقم
console.log(+'5' + +'10');   //15
console.log(+'5' + -'10');  //-5
console.log(+'5' + -'-10');  //-15
console.log(+'ahmad');  //NaN
console.log(+true);   //+1
console.log(+false);  //-1
console.log(+undefined);  //NaN
console.log(+null);  // 0

console.log( +'9'); // +9
console.log( Number('10')); // 10
console.log(typeof Number('10')); // number

console.log( +'9 mozak'); // NaN
console.log( Number('10 mozak')); // NaN

console.log( parseInt('10 mozak')); // 10
console.log( parseInt('text 10 mozak')); // NaN
console.log( parseInt('10.5')); // 10
console.log( parseFloat('10.5')); // 10.5
//اربع طرق لتحويل النص الى رقم 
// +'9 mozak')
// Number('10 mozak')
// parseInt('10.5')
// parseFloat('10.5')

console.log(Number.MAX_VALUE) //1.7976931348623157e+308 اكبر رقم في جافا  
console.log(Number.MAX_SAFE_INTEGER) // اكبر رقم امن 9007199254740991 
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991 اصغر رقم امن 
console.log(Number.isSafeInteger(66666666666)) // لمعرفة الرقم الامن او لا
console.log(Number.isSafeInteger(666690071992547409916666666))

console.log(Number.isInteger(6)) //true لتاكد من قيمة التي يعطينا ياها المستخدم اذا كانت رقم
console.log(Number.isInteger('6')) //false لتاكد من قيمة التي يعطينا ياها المستخدم اذا كانت رقم

console.log(Number.isNaN('ahmad' + 5)) //للسؤال اذا كانت القمية رقم او لا false
console.log(Number.isNaN('ahmad' - 5)) //true
console.log(Number.isNaN('ahmad' + 5)) //false
console.log(Number.isNaN(+'ahmad' + 5)) //true
console.log(Number.isNaN(5))//false
console.log(Number.isNaN('ahmad'))//false



