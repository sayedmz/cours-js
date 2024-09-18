//  ====some======
// هل العنصر المطلوب موجود
let nums = [1, 2, 3, 4, 5, 6, 7];
let check = nums.some(function (e) {
  console.log("text"); //  ست مرات فقط
  return e > 5;
});
console.log(check); //true

let check1 = nums.some((e) => e > 10);
console.log(check1); //false
//=====================================================
let nums1 = [1, 2, 3, 4, 5, 6, 7];
let mynumber = 5;
//==========
let check2 = nums1.some(function (e) {
  return e > this;
}, mynumber);
//==========
//  mynumber تاكد انو ارري يوجد فيها رقم اكبر من
console.log(check2); //true
//====================================

let mynumbers = 15;
//==========
let check3 = nums1.some(function (e) {
  return e > this;
}, mynumbers); //(this === mynumbers)
//==========
console.log(check3); //false
//=======================================================
let numss = [1, 2, 3, 4, 5, 6, 7];
function checkValues(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}

console.log(checkValues(numss, 20)); //false
// هل 20 موجودة

console.log(checkValues(numss, 5)); //true

//=========================================================
let num10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let range = {
  min: 10,
  max: 20,
};

let checkRange = num10.some(function (e) {
  return e >= this.min && e <= this.max;
}, range); //false
//  هل موجود في رنج رقم من 10 لل 20
