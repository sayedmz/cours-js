// let em = prompt('enter your email');
// let em1 = 'sayedmz9999@gmail.com';
// console.log(em.toLowerCase().trim() == em1);
//قبل المقارنة تحويل الى حروف صغيرة وحذف الفراغات

//---------------------
let x = 'ahmad';
let y = 'ahmad';
console.log(x == y); //true
let x1 = 'ahmad';
let y1 = 'ali';
console.log(x1 == y1);//false

//---------------------
// ==  '5'تقارن قيم فقط مثلا 5 تساوي value
// ===  '5'تقارن قيم وداتا تيب مثلا 5 لا تساوي vlue end data types
// < >   <=  >=  هل القيمية الاولى تساوي الثانية 
// !=  هل القيمة الاولى لا تساوي الثانية 

console.log(4 != 4);//false

//---------------------

let product = 'tv-samsung';
let size = 50;
let salary = 10000;
console.log ( salary >= 10000 );//true

console.log(salary < 12000 && size ==50); //true
console.log(salary < 12000 && size ==40); //false
console.log(salary < 12000 && size ==50 && product =="tv-samsung"); //true
//يجب ان يتحقق كل الشروط 

//---------------------

console.log(salary < 12000 || size ==30 || product =="tv-iphone"); //tue
// يجب ان يتحقق شرط واحد على الاقل 

//---------------------

//-----------------IF------------------

let num1 = 5;
let num2 = 10;
if (num2 > num1 ) //اذا تحقق الشرط 
{
    console.log('hello') // نفذ هذا الكود 
    console.log('hello')
    console.log('hello')
    console.log('hello')
}// hello hello hello hello 

let num11 = 12;
let num21 = 10;
if (num21 > num11 ) //اذا تحقق الشرط 
{
    console.log('hello') // نفذ هذا الكود 
    console.log('hello')
} // لاشيء

//exemple

// let num3 = prompt('num3');
// let num4 = prompt('num4');
// if (num3 > num4) {  //اذا ادخل المستخدم  القيم بشكل صحح 
// console.log("hello word") //يتحقق الكود 
// document.write("hello word")
// }
//-----------------------------------------
let x22 = 9 ; 
if ((x22>=0) && (x22<=10)) {
console.log('x22 ix betwen 0 and 10')
}
else{
    console.log("x22 is not between 0 and 10")
}//x22 ix betwen 0 and 10
//si x22 = 15  x22 is not between 0 and 10


let f = 80 ; 
if ((f>=0) || (f<=10)) {
console.log('f  is betwen 0 and 10')
}
else{
    console.log("f is not between 0 and 10")
}//في جميع الحالات صحيحية
//f  ix betwen 0 and 10

let x2 = -4 ; 
if ((x2>=0) || (x2<= -5)) {
console.log('x is yes')
}
else{
    console.log("x is not ")
}//x is not
//-------------------------------
//-------------------------------
// let code="LB122332" code may be "US12234323"
//validate if this code is lebanese or not:
//1: first 2 letters are LB
//2: The following number are of length 6

// let x4 = 'lB122332'
// if((x4[0]='l') && (x4[1]= 'b') && (x4.length == 8)){
//  console.log('lebanese code')
// }else{
//     console.log('not a lebanese code')
// }//lebanese code
console.log("testjs - Start");

// let code="LB122332" code may be "US12234323"
//validate if this code is lebanese or not:
//1: first 2 letters are LB
//2: The following number are of length 6

let code = "lb122332";

let firstPart = code.substring(0, 2); // LB

let secondPart = code.slice(2); // remove the first 2 characters

if (firstPart == "lb" && secondPart.length == 6) {

	console.log("Lebanese code");
    
} else if (firstPart == "US" && secondPart.length == 8) {

	console.log("US code");

} else {

	console.log("Not a Lebanese code nor a US code");
}
//Lebanese code
console.log("testjs - End");
//---------------------------------------------------


//---------------------switch---------------


let role = prompt('whtat is your role');

switch(role) //لا نستطيع استعمال < > ابدا 
{
case 'admin': //اذا تحقق هذا الشرط 
    document.write('create,update,delete');// نفذ هذا الشرط
    break;//تمنع الدخول الى الاحتمالات التالية اذا تحقق الشرط
    case 'moderator':
    document.write('create, update') ; 
    break;
    case 'editor':
    document.write('create');
    break;
    default:
        document.write('hello user');
}

















