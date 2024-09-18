console.log(Math.E);//2.718

console.log(Math.PI); //3.14

console.log(Math.abs(-10)); //10 لتويل - الى + في العمليات

console.log(Math.sqrt(4)); //2
console.log(Math.sqrt(16)) ;//4 radical

console.log(Math.pow(2,3)); //8 puissance
console.log(Math.pow(2,4)) ;//16 

console.log(Math.round(10.5)) ; //11 
console.log(Math.round(10.2)); //10
console.log(Math.round(10.7)); //11

console.log(Math.ceil(10.2)); //11 تتجه نحو الاكبر
console.log(Math.ceil(10.5)); //11
console.log(Math.ceil(10.8)) ;//11

console.log(Math.floor(10.1));//10 تتجه نحو الاصغر
console.log(Math.floor(10.5)) ;//10
console.log(Math.floor(10.9)) ;//10

console.log(Math.min(1,2,3,4,5,6,7,8)) // اصغر رقم 
console.log(Math.max(1,2,3,4,5,6,7,8)) // اكبر رقم 

console.log(Math.trunc(13.1))//13  شطب كل ما لعد الفاصلة
console.log(Math.trunc(634.7))//634
console.log(Math.trunc(124.3))//124
console.log(Math.trunc(57.5))//57

let arr5 = [13.1,634.7,124.3,57.5,17.8,65.0,-234.3,87.1,-79.3];
//1
console.log(arr5.indexOf(634.7)) //1
console.log(arr5.indexOf(3.57))//-1 اذا لم يكن موجود
console.log(arr5.indexOf(34))//-1
//2
console.log(arr5.includes(124.3))//true  
console.log(arr5.includes(90))//false ذا لم يكن موجود
console.log(arr5.includes(87.1))//true
console.log(arr5.includes(4))//false


//toFixed
console.log(102.233456.toFixed(3))//102.233
console.log(102.233456.toFixed(4))//102.2335
