//Array-CopyWithin

let myArry = [10, 20, 30, 40, 50, "a", "b"];
//start
myArry.copyWithin(3);
//ابدء النسخ من 3 مع الحفاظ على عدد عناصر ارري
console.log(myArry); //[10, 20, 30, 10, 20, 30, 40]
//================================================
let myArry1 = [10, 20, 30, 40, 50, "a", "b"];
//start  end
// ضع العناصر السادس في العانصر الرابع
myArry1.copyWithin(4, 6);
console.log(myArry1); //[10, 20, 30, 40, 'b', 'a', 'b']
//========================================
let myArry2 = [10, 20, 30, 40, 50, "a", "b"];

myArry2.copyWithin(4, -1);
console.log(myArry2); //[10, 20, 30, 40, 'b', 'a', 'b']
//====================================
let myArry3 = [10, 20, 30, 40, 50, "a", "b"];

myArry3.copyWithin(1, -2);
console.log(myArry3); //[10, 'a', 'b', 40, 50, 'a', 'b']
//--=============================
let myArry4 = [10, 20, 30, 40, 50, "a", "b"];

myArry4.copyWithin(1, -2, -1);
console.log(myArry4); //[10, 'a', 30, 40, 50, 'a', 'b']
