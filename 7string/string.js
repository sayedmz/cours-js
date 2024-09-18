// repeat تكرار
// length عد احرف والاماكن المحجوزة
// access
// search
// slice للتقطيع
// split 
let x8="this is a string1" ;
let y = 'this is a string2';

let z = `this is a string3`;

console.log(x8); //this is a string1
console.log(y); //this is a string2

console.log(z); //this is a string3

let c = `this is a string "sayed" 'mo zak'`; 
console.log(c); //this is a string "sayed" 'mo zak'

let x2 = "i \"love\" \\you \'backslash\'"
console.log(x2); //i "love" \you 'backslash'

let x3 = "i \tlove \nyou tabe"
console.log(x3); //i 	love  \t عددت فراغات
                //you tabe     \n  سطر جديد
  
           //string length
let x9 = "i love you length"
console.log(x9.length);// عدد الاحرف الجملة 17

         //At   charAt   CharCodeAt []
let y1 = "i love you charcodeat"
 
console.log(y1.charAt(0)); //i تعطينا حرف الذي رقمه صفر
console.log(y1.charAt(3)); //o
console.log(y1.charAt(5)); //e
console.log(y1.charAt(40)); //اذ كان رقم الحرف غير موجود لا تعطينا  شيئ

console.log(y1[0]); //i   تعطينا حرف الذي رقمه صفر
console.log(y1[3]); //o          charAt   مثل 
console.log(y1[5]); // e  

console.log(y1.at(-2)) // r   تعطينا حرف الذي رقمه صفر
console.log(y1.at(5)) // e            وتقبل قيمة سالبة
console.log(y1.at(-7)) // r

       //charcodeat الكود المخصص لكل حرف او رقم 

let y2 = "i love you charcodeat"
console.log(y2.charCodeAt(2)); //108  الكود المخصص لكل الحرف حسب رقم 2
console.log(y2.charCodeAt(4)); //118

      //exemple
let str= "this is a bus"

let first_vowel=str.charAt(2);
console.log("the first vowel is :" + first_vowel  ) //the first vowel is :i

let usingat_first = str.at(-2);
console.log("the vowel is :" + usingat_first); // the vowel is :u

let vowel1 = str.charAt(2);
let vowel2 = str.at(-2) ;
let code1 = str.charCodeAt(2);
let code2 = str.charCodeAt(11);

console.log(vowel1,code1+"\n"+ vowel2,code2) // i 105
                                             // u 11

    //slice(start end) substring(start end)  substr(start length)

//slice(start end)
let text = "number1, number2, number3"   
let new_text = text.slice(9,16) ;
console.log(new_text); //number2
let new_text1 = text.slice(18,25) ;
console.log(new_text1);   //number3  

//substring(start end)
let tx1 = "number1, number2, number3" 
let tx11 = tx1.substring(-9,16) ;
console.log( tx11); //number1, number2 بس ندخل سالب تعود للصفر
 
//substr(start length)
let tx2 = "number1, number2, number3" 
let tx22 = tx2.substr(0,10) ; // 10 خطوات من الرقم صفر
console.log(tx22); //number1, n

let x12 = 'i love java scripte';

console.log(x12.slice());//i love java scripte
console.log(x12.substring());//i love java scripte
console.log(x12.substr());//i love java scripte

console.log(x12.slice(4)); //ve java scripte //ابدء التقطيع من رقم 4
console.log(x12.slice(2,6)); //love //love من 2 لل 6   ابدء التقطيع بين رقمين 
console.log(x12.slice(-7)); //scripte //تقبل السالب
console.log(x12.slice(-7,-3)); //scri
console.log(x12.substring(2,6)); //love // من 2 لل 6 لا تقبل السالب

console.log(x12.substr(2,6)); //love j // ابدء من 2 ل6خطوات

//repeat
let name = 'ali ';
console.log(name.repeat( 3)); //ali ali ali 



let x5 = 'i love java scripte'
console.log(x5.split('j'))//['i love ', 'ava scripte']
console.log(x5.split()) //['i love java scripte']
console.log(x5.split(' ')) //(4) ['i', 'love', 'java', 'scripte'] //تقطيع عند الفراغ
console.log(x5.split(' ',2))  //(2) ['i', 'love']// تقطيع عند الفراغ مرتين فقط
console.log(x5.split('o')) //(2) ['i l', 've java scripte'] //تقطيع عند حرف اووه
console.log(x5.split('')) //(19) ['i', ' ', 'l', 'o', 'v', 'e', ' ', 'j', 'a', 'v', 'a', ' ', 's', 'c', 'r', 'i', 'p', 't', 'e'] //تقطيع عند كل حرف 
console.log(x5.slice(3,5))//ov
console.log(x5.split('',6)) //(6) ['i', ' ', 'l', 'o', 'v', 'e'] //تقطيع عند كل حرف 6 مرات 



//uppercase  lowercase
let tx3 = "number1, number2, number3" 
let tx33 = tx3.toLowerCase()
let tx34 = tx3.toLocaleUpperCase()
console.log(tx33); //number1, number2, number3
console.log(tx34); //NUMBER1, NUMBER2, NUMBER3

let tx35 = tx3.substring(9,16).toLocaleUpperCase();
console.log(tx35); //NUMBER2

      //concat() لجمع الوحدات
let tx4 = "number1" 
let tx5 = "number2" 
let tx54 = tx4.concat(' ' , tx5);
console.log(tx54); //number1 number2
let tx55 = tx4.concat(' ' , tx5 , " number3" , " number3");
console.log(tx55); // number1 number2 number3 number3



            //search 
//indexOf(start,end)  lastIndexOf(start,end)   includes(start,end) 
//  startswith(start,end)  endsWith(start,length)
let x15 = 'i love java scripte';

console.log(x15.indexOf('o')); //3    //ابحث عن حرف من البداية
console.log(x15.indexOf('a',9)); //10    //ابدء البحث من الرقم 9 
console.log(x15.indexOf('java')); //7     //تبدء البحث من الشمال
console.log(x15.indexOf('z')); // -1  اذا لم يكن موجود

console.log(x15.lastIndexOf('l')); //2     //تبدء البحث من اليمين
console.log(x15.lastIndexOf('java')); //7    
console.log(x15.lastIndexOf('i')); //15    
console.log(x15.lastIndexOf('i',14)); //0    
console.log(x15.lastIndexOf('z')); //-1 اذا لم يكن موجود


console.log(x15.includes("l")); //true  اذا كان موجود
console.log(x15.includes("z")); //false اذا لم يكن موجود

console.log(x15.startsWith('i')); //true   هل هي تبدأ بال حرف المحدد
console.log(x15.startsWith('z')); //false اذا كان لاتبدا بالحرف المحدد خطا
console.log(x15.startsWith('love' ,2)); //true

console.log(x15.endsWith('e')); //true هل تنهتي بالحرف المحدد
console.log(x15.endsWith('e,7')); //false اذا انتقلنا 7 خطوات هل ينتهي بالحرف المحدد
//--------------------------------------------------

//لاضافة خصائص  %c
console.log('%chello %cwhat is %cyour name' , "color : red ; font-size : 40px "  , "color : blue ; font-size : 40px " , "color : yellow ; font-size : 40px ")



// لطباعة الاسماء بشكل جودول 
console.table(['mouhamad' , 'ahamd' , 'abedlhami'])

//  consle  ليس من خصائص جافاسكربيت 
// هو من خصائص  wpis 